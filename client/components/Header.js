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
        <img id="header-logo" src="/assets/logos/sitelogo.png" onClick={()=> history.push('/home')}/>


        <div className="header-nav-item noselect">visual artist</div>

        {/*   <div id="header-nav">
          <nav className="cl-effect-17">
          <a href="#" data-hover="home"><span>home</span></a>
          <a href="#" data-hover="stock goods"><span>stock goods</span></a>
          <a href="#" data-hover="setup info"><span>setup info</span></a>
          <a href="#" data-hover="contact"><span>contact</span></a>
          </nav>
            <div className="header-nav-item noselect" onClick={this.navClick} value="events">stock goods</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="events">setup info</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="donations">donate for more tp</div>
            <div className="header-nav-item noselect" onClick={this.navClick} value="contact">contact</div>
          </div>
          */}
            <button className="button button--rayen button--border-thin button--text-thick button--text-upper button--size-s" data-text="contact"><span>contact</span></button>
      </div>
    )
  }
}
