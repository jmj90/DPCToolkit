import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Parallax, Background } from 'react-parallax';

export default class Scholarships extends Component {

  render() {

    return (
      <div className="scholarship-page-main">
        <Header />
          <Parallax
            bgImage={"/assets/graduation.jpg"}
            strength={1000}
            blur={4}>
            <center>
              <div className="scholarship-title"> Scholarships </div>
              <div className="scholarship-header-content">
                <div className="scholarship-text-large">
                  The Solly’s Way Foundation recognizes the character and perseverance
                  many young people exemplify in the face of adversity. Our foundation
                  presents a scholarship program for college-bound high school seniors
                  who experienced the loss of a parent or guardian.
                  <br/>
                  <br/>
                </div>
              </div>
            </center>
          </Parallax>
          <div className="sub-page-main">
            <div className="sub-page-content">
              <br />
              <br />
              <div className="page-text">
                <center>
                  Qualified entrants who submit essays or video essays about how
                  the loss of a parent or guardian impacted their lives are eligible
                  for a minimum of $1,000 in scholarship funds.
                </center>
              </div>
              <div className="subpage-header-title">
                <b> - CRITERIA FOR APPLICATION - </b>
              </div>
              <div className="container-information-list">
                <b>Must be:</b>
                <ul>
                  <li> A graduating senior with a minimum GPA of 2.5 on a 4.0 scale </li>
                  <li> A U.S. citizen and resident of Illinois </li>
                  <li> A history of extracurricular activities that demonstrates a willingness to serve the community </li>
                  <li> Submit a letter of recommendation </li>
                  <li> Submit an official high school transcript </li>
                  <li> Complete and sign application </li>
                  <li> Have suffered the loss of a parent or guardian </li>
                </ul>
              </div>
              <br/><br/>
                <div className="page-text">
                    If you are qualified for our scholarship and would like to apply,
                    please complete our application to be considered.
                    <br/>
                    <br/>
                </div>
                  <div
                    className="apply-button"
                    name="online"
                    target="_blank"
                    onClick={() => window.location.href = `https://goo.gl/forms/6Ux0uvfUSvRZcgui2`}>
                    Apply Online
                  </div>
                  <div className="page-text-fine">
                    Use our online form to submit an application
                    <br/><br/>
                    <b>Note:</b><i> a gmail account is required. If you do not have one, please
                    sign up free and you will be able to access this application.</i>
              {/* <div className="split-content-right">
                  <div className="apply-button" name="mail" >
                    Apply By Mail
                  </div>
                  <div className="page-text-fine">
                    Download a PDF version of our application and submit by mail
                  </div>
                </div>
                */}
              </div>
              <br/>
              <div className="page-text-small">
                <center>
                  If you have any questions regarding our scholarship program,
                  please don't hesisate to ask or voice your concerns
                  at the link below
                </center>
              </div>
              <div className="page-link-button" onClick={() => window.location.href = `/contact`}>
                contact
              </div>
              <div className="subpage-header-title-special">
                <b> Congratulations to the following recipients:</b>
              </div>
              <div id="recipients-container">

                <div className="recipients-year-title"> 2018: </div>
                <ul className="recipient-list">
                  <li> <b> Julia Shein,</b> Barrington High School </li>
                  <li> <b> Kaylin Hu,</b> Barrington High School </li>
                  <li> <b> Angela Choksi,</b> Barrington High School </li>
                  <li> <b> Matthijs Enters,</b> Lake Zurich High School </li>
                  <li> <b> Averi Mireault,</b> Barrington High School </li>
                  <li> <b> Tyler Hansen,</b> Barrington High School </li>
                  <li> <b> Gabi Bendfeldt,</b> Lake Zurich High School </li>
                </ul>

                <div className="recipients-year-title"> 2017: </div>
                <ul className="recipient-list">
                  <li> <b> Jennifer Garcia,</b> Barrington High School </li>
                  <li> <b> Ann Stachnik,</b> Barrington High School </li>
                </ul>

                <div className="recipients-year-title"> 2016: </div>
                <ul className="recipient-list">
                  <li> <b> Sydney Stewart,</b> Barrington High School </li>
                  <li> <b> Jake Zyzda,</b> Barrington High School </li>
                  <li> <b> Sean Morris,</b> Barrington High School </li>
                  <li> <b> Romina Rago,</b> Barrington High School </li>
                </ul>

                <div className="recipients-year-title"> 2015: </div>
                <ul className="recipient-list">
                  <li> <b> Cassie Kuehn,</b> Barrington High School </li>
                  <li> <b> William Lake,</b> Barrington High School </li>
                  <li> <b> Ryan Ambrose,</b> Barrington High School </li>
                  <li> <b> Dominic Mues,</b> Wauconda High School </li>
                  <li> <b> Kylee Groh,</b> Wauconda High School </li>
                </ul>

                <div className="recipients-year-title"> 2014: </div>
                <ul className="recipient-list">
                  <li> <b> Luiz Garcia,</b> Barrington High School  </li>
                  <li> <b> Jake Baumgarten,</b> Wauconda High School </li>
                  <li> <b> Bailey Kuhn,</b> Lake Zurich High School </li>
                  <li> <b> Amelia Ashley,</b> Wauconda High School </li>
                  <li> <b> Parmvier Kuhlon,</b> Wauconda High School </li>
                </ul>

                <div className="recipients-year-title"> 2013: </div>
                <ul className="recipient-list">
                  <li> <b> Sara Bonefas,</b> Lake Zurich High School </li>
                  <li> <b> Tommy Kowalski,</b> Lake Zurich High School </li>
                </ul>

            </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}
