import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Error extends Component {

  render() {

    return (
      <div className="sub-page-full">
        <img id="error-image" src="/assets/errorimage.png"/>
        <div className="rem-spacer"/>
        <h2>
          Uh Oh, Something went wrong...
        </h2>
        <center>
        <p>
          Sorry about that. Looks like something didn't work correctly.
          <br/>
          Please use the link below to go back to the contact form and try again.
        </p>
      </center>
        <div className="page-link-button" onClick={() => window.location.href = `/contact`}> contact </div>
        <div className="rem-spacer" />
        <img id="paypal-cards" src="/assets/sollyslogo3.png"/>
      </div>
    )
  }
}
