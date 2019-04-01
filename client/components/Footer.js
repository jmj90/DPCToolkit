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
      </div>
      <div className="copy">
      © 2019 GLASS PYRAMIDS MEDIA. All Rights Reserved.
      </div>
    </div>
    )
  }
}
