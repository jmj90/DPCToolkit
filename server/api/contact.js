const router = require('express').Router()
const path = require('path')
module.exports = router

// EMAIL CONFIGURATION =========================================================

let nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'sollyswayfoundation@gmail.com',
         pass: 'SollyD12!'
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
  let user = req.body
      // to user
      contactSubmissionToUser.to = user.email
      contactSubmissionToUser.html = `
      <h3> Hello ${user.name}, </h3>
        <p>
          Thank you for contacting Solly's Way Foundation. We have recieved
          your message.
        </p>
        <h3> Your Message: </h3>
        <div className="email-message-comment"> ${user.comment} </div>
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

        // to admin
        contactSubmissionToAdmin.replyTo = user.email
        contactSubmissionToAdmin.html = `
        <h2> You've recieved a new contact submission from SollysWay.org </h2>
        <br />
          <b> From:  </b> ${user.name}
          <br />
          <b> Email: </b> ${user.email}
          <br />
          <br />
          <h4> Message: </h4>
            <div className="email-message-comment"> ${user.comment} </div>
        <br />
        <br />
        <p> Follow the link below to reply </p>
        <img className="email-tag-logo" src="cid:sollyslogo"/>
        `
        transporter.sendMail(contactSubmissionToAdmin, (err, info) => {
          if (err) console.log(err)
          else console.log(info)
        })
        res.sendStatus(200)
    }
)
