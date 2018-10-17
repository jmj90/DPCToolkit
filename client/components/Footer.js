import React, { Component } from 'react'


export default class Footer extends Component {


  navClick(evt) {
    let path = evt.target.innerHTML.split(' ')
    path = path[0].toLowerCase()
    window.location.href = `/${path}`
  }

  render() {
    return (
      <div className="footer-outer">
      <div className="footer-container">
        <img id="footer-logo" src="/assets/sollyslogo2.png"/>
        <div className="footer-divider" />
          <div id="footer-nav">
            <div className="footer-nav-item noselect" onClick={this.navClick} value="home">Home</div>
            <div className="footer-nav-item noselect" onClick={this.navClick} value="about">About</div>
            <div className="footer-nav-item noselect" onClick={this.navClick} value="scholarships">Scholarships</div>
            <div className="footer-nav-item noselect" onClick={this.navClick} value="events">Events</div>
            <div className="footer-nav-item noselect" onClick={this.navClick} value="donations">Donations</div>
            <div className="footer-nav-item noselect" onClick={this.navClick} value="photos">Photos</div>
            <div className="footer-nav-item noselect" onClick={this.navClick} value="contact">Contact</div>
          </div>
          <div className="footer-divider" />
          <div id="footer-connect-nav">
            <div className="footer-nav-text"> connect with us : </div>
            <img
              id="facebook-logo"
              src="/assets/facebook.png"
              onClick={() => window.location.href="https://www.facebook.com/pages/Sollys-Way-Foundation/593681160660088"}/>
            <img
              id="instagram-logo"
              src="/assets/instagram.png"
              onClick={() => window.location.href="https://www.instagram.com/sollysway/"}/>
            <img id="email-logo" src="/assets/email.png" />
          </div>
      </div>
      <div className="copy">
        © Solly's Way Foundation, Inc. is a non for profit organization. For
        more information call 847-804-0210
      </div>
    </div>
    )
  }
}
