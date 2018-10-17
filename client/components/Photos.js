import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Parallax, Background } from 'react-parallax';

export default class Photos extends Component {

  render() {

    return (
      <div className="scholarship-page-main">
        <Header />
          <div className="sub-page-main donate">
            <div className="sub-page-content">
              <div className="page-text-large photo-title">
                Photos
              </div>
              <br/>
              <div className="page-text-small">
                <center>
                  photo gallery coming soon
                </center>
              </div>
              <br/>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}
