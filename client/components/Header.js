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
          src="/assets/logos/glass6.png"
          onClick={()=> history.push('/home')}/>
        </div>


        <div id="header-nav">
          <nav className="cl-effect-13" style={{fontSize:"12px"}}>
            <a href="http://www.google.com" data-hover="Stock Goods"><span>Stock Goods</span></a>
          </nav>
          <nav className="cl-effect-13" style={{fontSize:"12px"}}>
            <a href="http://www.google.com" data-hover="Custom Shop"><span>Custom Shop</span></a>
          </nav>
            <button
              className="button button--rayen
              button--border-thin button--text-thick
              button--text-upper button--size-s"
              data-text="contact"
              onClick={() => window.location.href = "mailto:info@glasspyramids.com?subject=GLASSPYRAMIDS.COM:%20CONTACT"}>
              <span>contact</span>
            </button>
          </div>
      </div>
    )
  }
}
