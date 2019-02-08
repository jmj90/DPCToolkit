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
              onClick={() => window.location.href="https://www.twitch.tv/pooey_butts"}/>
            <img id="mixer-logo" src="/assets/icons/mixer.png"
              onClick={() => window.location.href="https://mixer.com/pooey_butts"}/>
          </div>
      </div>
      <div className="copy">
      Just a guy making poo jokes and overlays © 2019 Pooey Butts Media. All Rights Reserved.
      </div>
    </div>
    )
  }
}
