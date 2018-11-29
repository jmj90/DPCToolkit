const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const PORT = process.env.PORT || 8080
const socketio = require('socket.io')
const enforce = require('express-sslify');
const app = express()

module.exports = app

/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */

if (process.env.NODE_ENV !== 'production') require('../secrets')

const createApp = () => {

  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // compression middleware
  app.use(compression())

  // auth and api routes
  app.use('/api', require('./api'))

  if (process.env.NODE_ENV === 'production'){
    //redirect to HTTPS
    app.use(enforce.HTTPS({ trustProtoHeader: true }))
  }

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // any remaining requests with an extension (.js, .css, etc.) send 404
  // app.use((req, res, next) => {
  //   if (path.extname(req.path).length) {
  //    const err = new Error('Not Found')
  //     err.status = 404
  //     console.error(err)
  //     next(err)
  //   } else {
  //     next()
  //   }
  // })

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Something went very wrong 8( ... Internal server error.')
  })
}


const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

  // set up our socket control center
  const io = socketio(server)
  require('./socket')(io)
}


// const syncDb = () => db.sync()

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
    // syncDb()
    createApp()
    startListening()
} else {
  createApp()
}
