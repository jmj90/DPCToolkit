import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Parallax, Background } from 'react-parallax';
import ProductGrid from './ProductGrid'
import LandingVideo  from './LandingVideo'

export default class Home extends Component {

  render() {

    return (
      <div className="main">
        <Header />

          <div className="banner-container">
            <LandingVideo />
          </div>

           <div className="vimeo-container">
           <iframe
             className="vimeo-video"
             src="https://player.vimeo.com/video/321293059?color=ff0179&byline=0&portrait=0"
             width="400" height="230"
             frameBorder="0"
             webkitallowfullscreen="true"  mozallowfullscreen="true" allowFullScreen>
           </iframe>
           <iframe src="https://player.vimeo.com/video/278596217"
             className="vimeo-video"
             width="400" height="230"
             frameBorder="0"
             webkitallowfullscreen="true"  mozallowfullscreen="true" allowFullScreen>
           </iframe>
           <iframe src="https://player.vimeo.com/video/199082789"
             className="vimeo-video"
             width="400" height="230"
             frameBorder="0"
             webkitallowfullscreen="true"  mozallowfullscreen="true" allowFullScreen>
           </iframe>
         </div>
          <div className="sub-page-content">
            <div className="title-text-large">
              <div className="rem-spacer" />
            OH BOY, FULL SITE COMING REAL SOON
          </div>
          <br />
          <div className="email-me">
            For now if you want something shoot me an email: <div className="text-quote"> customs@pooeybutts.com</div>
          </div>
          <div className="rem4-spacer" />
          {/*
        <div className="sub-page-title">peep what peeps are saying.</div>

            <br/>
              <div className="text-quote">
              "These shitters are fucking awesome bro." - XxSkateric10xX
              </div>
              <div className="text-quote">
              "I'd take you out back, fuck you, then get a netflix special" - steven avery
              </div>
            <div className="divider" /> <div className="sub-page-content">
                  <ProductGrid />
              </div>
              */}

              <div className="rem-spacer" />
          </div>
        <Footer />
      </div>
    )
  }
}
