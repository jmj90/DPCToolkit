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
      <div className="copy">
      Author: Jake Johnson<br />
      Bounteous
      </div>
    </div>
    )
  }
}
