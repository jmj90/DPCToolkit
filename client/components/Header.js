import React, { Component } from 'react'
import history from '../history'



export default class Header extends Component {

navClick(evt, data) {
  let path = evt.target.innerHTML.split(' ')
  path = path[0].toLowerCase()
  window.location.href = `/${path}`
}

  render() {
    return (
      <div className="header-container">
        <div id="top-logo">
        <img id="header-logo"
          src="/assets/logos/dpc.png"
          onClick={()=> history.push('/home')}/>
        </div>
      </div>
    )
  }
}
