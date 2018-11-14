import React from 'react'
import Routes from './routes'

function navClick(evt, data) {
  let path = evt.target.innerHTML.split(' ')
  path = path[0].toLowerCase()
  window.location.href = `/${path}`
}

function hamburgerClick(e) {
  let item = document.getElementById('hamburger-menu')
  let menu = document.getElementById('menu')
  let list = item.classList
  list.toggle('is-active')
  menu.classList.toggle('isactive')
}


const App = () => {
  return (
    <div>
      {
        window.innerWidth <= 800 ?
        <div id="mobile-menu">
          <div id="menu">
            <div className="menu-item-title noselect" onClick={navClick}>Menu</div>
            <div className="menu-item noselect" onClick={navClick} value="home">Home</div>
            <div className="menu-item noselect" onClick={navClick} value="about">About</div>
            <div className="menu-item noselect" onClick={navClick} value="scholarships">Scholarships</div>
            <div className="menu-item noselect" onClick={navClick} value="events">Events</div>
            <div className="menu-item noselect" onClick={navClick} value="donations">Donations</div>
            <div className="menu-item noselect" onClick={navClick} value="photos">Photos</div>
            <div className="menu-item noselect" onClick={navClick} value="contact">Contact</div>
            <br/>
          </div>
          <div id="hamburger-menu"
            className="hamburger hamburger--collapse js-hamburger"
            onClick={()=> hamburgerClick()}>
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
      </div>
      : <div/>
      }
      <Routes />
    </div>
  )
}

export default App
