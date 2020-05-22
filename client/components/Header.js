import React from 'react'
import history from '../history'

const Header = () => {
  return (
    <div className="header-container">
      <div className="flex-container">
        <img className="logo-md" src="/assets/logos/dpc.png"/>
        <h1>DPC Toolkit</h1>
      </div>
      <div className="flex-container">
        <div className="nav-item">Banner Formatter</div>
        <div className="nav-item">Store List Formatter</div>
        <div className="nav-item">Subject Line Formatter</div>
      </div>
    </div>
  )
}

export default Header
