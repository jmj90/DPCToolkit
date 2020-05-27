import React from 'react'
import Routes from './routes'
import { Header, Footer } from './components'

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
    <div className="main">
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
