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
      <Routes />
    </div>
  )
}

export default App
