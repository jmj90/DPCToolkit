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
        <img id="footer-logo" src="/assets/logos/poocomv2.png"/>
          <div id="footer-connect-nav">
            <div className="footer-nav-text"> internet things : </div>
            <img
              id="twitch-logo"
              src="/assets/icons/twitch.png"
              onClick={() => window.location.href="https://www.facebook.com/pages/Sollys-Way-Foundation/593681160660088"}/>
            <img
              id="twitter-logo"
              src="/assets/icons/twitter.png"
              onClick={() => window.location.href="https://www.instagram.com/sollysway/"}/>
            <img id="mixer-logo" src="/assets/icons/mixer.png" />
          </div>
      </div>
      <div className="copy">
      Just a guy making poo jokes and overlays © 2019 Pooey Butts Media. All Rights Reserved.
      </div>
    </div>
    )
  }
}
