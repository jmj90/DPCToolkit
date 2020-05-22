import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import BannerFormatter from './BannerFormatter'


export default class Home extends Component {

  render() {

    return (
      <div className="main">
        <Header />
        <BannerFormatter />
        <Footer />
      </div>
    )
  }
}
