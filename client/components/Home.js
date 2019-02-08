import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Parallax, Background } from 'react-parallax';
import ProductGrid from './ProductGrid'

export default class Home extends Component {

  render() {

    return (
      <div className="sub-page-main">
          <Parallax
            bgImage={"/assets/images/toiletpaper.png"}
            strength={300}
            blur={1}>
                    <Header />
               <div className="rem4-spacer" />
                <center>
                  <div className="title-text-large">
                 CUSTOM OVERLAYS, TRANSITIONS, ALERTS, SOUNDS - GET EXACTLY WHAT
                 YOU WANT, NOT WHAT EVERYONE ELSE HAS
                 </div>
                </center>
               <div className="rem4-spacer" />
           </Parallax>
        <div className="sub-page-content-outer">
          <div className="sub-page-content">
            <div className="title-text-large">
              <div className="rem4-spacer" />
            OH BOY, FULL SITE COMING REAL SOON
          </div>
          <br />
          For now if you want something shoot me an email: <div className="text-quote">customs@pooeybutts.com</div>
            {/* <div className="sub-page-title">About Solly's Way Foundation</div>
            <div className="rem-spacer" />
            <div className="title-text-large">
              peep what peeps are saying.
            </div>
            <br/>
              <div className="text-quote">
              "These shitters are fucking awesome bro." - XxSkateric10xX
              </div>
              <div className="text-quote">
              "I'd take you out back, fuck you, then get a netflix special" - steven avery
              </div>
            <div className="divider" />
              <div className="sub-page-content">
                  <ProductGrid />
              </div>
              */}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
