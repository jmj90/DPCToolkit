const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express()
if (process.env.NODE_ENV !== 'production') require('./secrets')
module.exports = app
//work

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

app.set('port', (process.env.PORT || 5000));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(app.get('port'), () => {
  console.log("server running on ", app.get('port'))
})
