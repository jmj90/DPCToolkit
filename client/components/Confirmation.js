import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Confirmation extends Component {

  render() {

    return (
      <div className="sub-page-full">
        <img id="confirmation-logo" src="/assets/sollyslogo4.png"/>
        <div className="rem-spacer"/>
        <h2>
          Thank you for contacting us!
        </h2>
        <p>
          <center>
          We will get back to you as quickly as possible.
          <br/>
          You will recieve a confirmation email shortly notifying you that we've
          recieved your submission.
          </center>
        </p>
        <div className="page-link-button" onClick={() => window.location.href = `/`}> return home </div>
      </div>
    )
  }
}
