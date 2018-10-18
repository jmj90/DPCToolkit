import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Parallax, Background } from 'react-parallax';

export default class About extends Component {

  render() {

    return (
      <div className="sub-page-main">
        <Header />
          <Parallax
            bgImage={"/assets/photos/hawks.jpg"}
            strength={300}
            blur={0}
            style={{
              width: '100vw',
             }}>
               <div className="rem4-spacer" />
                <center>
                 <img id="logo-about" src="/assets/sollyslogo2.png"/>
                </center>
               <div className="rem4-spacer" />
           </Parallax>
        <div className="sub-page-content-outer">
          <div className="sub-page-content">
            {/* <div className="sub-page-title">About Solly's Way Foundation</div> */}
            <div className="rem-spacer" />
            <div className="page-text">
              <img id="placer1" src="/assets/photos/unclesol.jpg" />
              On June 3, 2012, Solly DeLaurentis, Jr. tragically lost his life
              to a rare undetected heart defect that caused him to black
              out while on a motorcycle run benefiting Salvation Army charities.
              At that moment, the lives of his wife and their three children were
              drastically changed forever. The implications of losing a parent at
              a young age, both emotionally and financially, are one of life’s
              most difficult ordeals.
              <br/>
              <div className="text-quote">
              "I have learned so many things this year about myself, my children,
              my endearing family, and ever so caring friends. It’s clear to me now
              how kind and generous people are. People care and want to make a
              difference. This is how the idea of the Solly’s Way Foundation
              came about." - Sharyn DeLaurentis
              </div>
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
