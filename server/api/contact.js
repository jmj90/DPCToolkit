const router = require('express').Router()
const { Contact } = require('../db/models')
const path = require('path')
module.exports = router


// EMAIL CONFIGURATION =========================================================

let nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'sollyswayfoundation@gmail.com',
         pass: '102901jj'
     }
 });

const contactSubmissionToUser = {
  from: 'no-reply@sollysway.org', // sender address
  to: 'to@gmail.com', // list of receivers
  subject: `Solly's Way Foundation: We've Recieved Your Submission.`, // Subject line
  html: 'message',
  attachments: [{
        filename: 'swf_email_logo.png',
        path: path.join( __dirname, '..', '..', 'public', '/assets/swf_email_logo.png'),
        cid: 'sollyslogo' //same cid value as in the html img src
    }]
}

const contactSubmissionToAdmin = {
  from: 'no-reply@sollysway.org', // sender address
  to: 'sollyswayfoundation@gmail.com', // list of receivers
  replyTo: 'user',
  subject: `Solly's Way Foundation: New Contact Form Submission`, // Subject line
  html: 'message',
  attachments: [{
        filename: 'sollyslogo3.png',
        path: path.join( __dirname, '..', '..', 'public', '/assets/swf_email_logo.png'),
        cid: 'sollyslogo' //same cid value as in the html img src
    }]  // plain text body
}


// API ROUTES ==================================================================

router.post('/', (req, res, next) => {
  let user;
  Contact.findOrCreate({
    where: req.body
  })
    .then(contact => {
      res.json(contact).status(200)
      user = contact
    })
    .then(() => {
      // to user
      contactSubmissionToUser.to = user[0].email
      contactSubmissionToUser.html = `
      <h3> Hello ${user[0].name}, </h3>
        <p>
          Thank you for contacting Solly's Way Foundation. We have recieved
          your message.
        </p>
        <h3> Your Message: </h3>
        <div className="email-message-comment"> ${user[0].comment} </div>
        <br />
        <br />
        <p>
        We will get back to you as soon as possible.
        </p>
        <br />
        - Solly's Way Foundation
        <br />
        <br />
        <img className="email-tag-logo" src="cid:sollyslogo"/>
      `
      transporter.sendMail(contactSubmissionToUser, (err, info) => {
        if (err) console.log(err)
        else console.log(info)
      })
    })
    .then(() => {
      // to admin
      contactSubmissionToAdmin.replyTo = user[0].email
      contactSubmissionToAdmin.html = `
      <h2> You've recieved a new contact submission from SollysWay.org </h2>
      <br />
        <b> From:  </b> ${user[0].name}
        <br />
        <b> Email: </b> ${user[0].email}
        <br />
        <br />
        <h4> Message: </h4>
          <div className="email-message-comment"> ${user[0].comment} </div>
      <br />
      <br />
      <p> Follow the link below to reply </p>
      <img className="email-tag-logo" src="cid:sollyslogo"/>
      `
      transporter.sendMail(contactSubmissionToAdmin, (err, info) => {
        if (err) console.log(err)
        else console.log(info)
      })
    })
    .catch(next)
  }
)
