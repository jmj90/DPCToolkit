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
        <img id="header-logo" src="/assets/sollyslogo3.png" onClick={()=> history.push('/home')}/>
          <div id="header-nav">
            <div className="header-nav-item noselect" onClick={this.navClick} value="about">About</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="scholarships">Scholarships</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="events">Events</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="donations">Donations</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="photos">Photos</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="contact">Contact</div>
          </div>
      </div>
    )
  }
}
