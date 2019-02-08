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
        <img id="header-logo" src="/assets/logos/poocomv2.png" onClick={()=> history.push('/home')}/>
        {/*
          <div id="header-nav">
            <div className="header-nav-item noselect" onClick={this.navClick} value="about">home</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="events">stock goods</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="events">setup info</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="donations">donate for more tp</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="contact">contact</div>
          </div>
          */}
      </div>
    )
  }
}
