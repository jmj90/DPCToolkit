import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Four04 extends Component {

  render() {

    return (
      <div>
        <Header />
        <div className="sub-page-80">
          <div id="four04">
            <div id="not-found"> page not found </div>
            <h2>
              Sorry, it appears the page you are looking for is no longer active...
            </h2>
            <center>
            <p>
              Please use the link below to go back to the home page and try again.
            </p>
          </center>
          <div className="page-link-button" onClick={() => window.location.href = `/home`}> Home </div>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}
