import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Parallax, Background } from 'react-parallax';

export default class Home extends Component {

  render() {

    return (
      <div className="main">
        <Header />
        <Footer />
      </div>
    )
  }
}
