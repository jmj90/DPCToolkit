import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Parallax, Background } from 'react-parallax';

export default class Events extends Component {

  render() {

    return (
      <div className="scholarship-page-main">
        <Header />
          <Parallax
            bgImage={"/assets/photos/events2.jpg"}
            strength={1000}
            blur={4}>
            <center>
              <div className="scholarship-title"> Events </div>
              <div className="scholarship-header-content">
                <div className="scholarship-text-large">
                  We would like to thank everyone who came out for the third golf
                  outing at Makray Memorial Golf Club. It was a beautiful day and
                  we are so fortunate to have such great family and friends
                  supporting this cause. Funds raised at Solly’s Way Foundation
                  Golf Outing go towards providing college scholarships for
                  students who have suffered from losing a parent.
                  <br/>
                  <br/>
                </div>
              </div>
            </center>
          </Parallax>
          <div className="sub-page-main">
            <div className="sub-page-content">
              <div className="subpage-header-title-special">
                <b> Upcoming Events </b>
              </div>
              <div className="page-text">
                There are currently no upcoming events at this time. Please check
                back soon as we anticipate an announcement for our next event in
                the near future.
              </div>
              <div className="subpage-header-title-special">
                <b> Registration </b>
              </div>
              <br/>
                <div className="page-text">
                  Registration is currently closed. Thank you all for supporting
                  the Solly's Way Foundation and we look forward to seeing you at
                  the next event.
                  <br/>
                </div>
              <br/>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}
