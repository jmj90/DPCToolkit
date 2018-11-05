import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Construction extends Component {

  render() {

    return (
      <div className="sub-page-full">
        <img id="confirmation-logo" src="/assets/sollyslogo4.png"/>
        <div className="rem-spacer"/>
        <h2>
          Currently Undergoing a Rebuild!
        </h2>
        <p>
          <center>
          Thank you for visiting SollysWay.org
          <br/>
          <br />
          We are currently rebuilding our web platform and will be back online
          this week. Please check soon and thank you for your patience!
          <br />
          <br />
          date: 11/5/18
          </center>
        </p>
      </div>
    )
  }
}
