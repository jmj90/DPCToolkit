import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Parallax, Background } from 'react-parallax';

export default class Home extends Component {

  render() {

    return (
      <div className="sub-page-main">
        <Header />
          <Parallax
            bgImage={"/assets/images/cyberpunk.png"}
            strength={300}
            blur={1}>
               <div className="rem4-spacer" />
                <center>
                  <div className="title-text-large">
                 CUSTOM OVERLAYS, TRANSITIONS, ALERTS. GET EXACTLY WHAT
                 YOU WANT, NOT WHAT EVERYONE ELSE HAS!
                 </div>
                </center>
               <div className="rem4-spacer" />
           </Parallax>
        <div className="sub-page-content-outer">
          <div className="sub-page-content">
            {/* <div className="sub-page-title">About Solly's Way Foundation</div> */}
            <div className="rem-spacer" />
            <div className="title-text-large">
              peep what peeps are saying.
            </div>
            <br/>
              <div className="text-quote">
              "These shitters are fucking awesome bro." - XxSkateric10xX
              </div>
            <div className="divider" />
              <div className="split-content">
                <div className="split-content-left">
                  <div className="page-text">
                    <div className="text-quote"> <b> Our mission: </b> </div>
                    <div id="mission-text">
                      Solly's Way Foundation brings compassion to tragedy, and turns
                      tragedy to triumph, by providing college scholarships to students
                      who have lost a parent or guardian. The sudden loss of a parental
                      figure triggers a broad range of family crises that may take
                      years to surmount. It is with our best efforts and dedication
                      to present these young adults with a greater chance for a
                      successful future.
                    </div>
                    </div>
                  </div>
                  <div className="split-content-right">
                    <img id="placer2" src="/assets/photos/family.jpg" />
                  </div>
                </div>
              <div className="subpage-header-title"> Learn about our scholarship program </div>
              {
                window.innerWidth <= 800 ?
                <div>
                  <img className="breakpoint-icons" onClick={() => window.location.href="/scholarships"} src="/assets/gradhat.png" />
                  <br/><br/>
                  <br/>
                </div>
                :
                <img id="books" onClick={() => window.location.href="/scholarships"} src="/assets/books.jpg" />
              }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
