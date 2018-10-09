import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import ParallaxComponent from 'react-parallax-component';
import { Parallax as Plax } from 'react-scroll-parallax'
import Footer from './Footer'

export default class Lander extends Component {

  constructor(props){
    super(props) ;
  }

  componentDidMount() {
    //run our location function once our component has mounted with the data
    let item = document.getElementById('hamburger-menu')
    let menu = document.getElementById('menu')

      window.addEventListener('scroll', function(e) {
      let yPosition = window.scrollY;
      if (yPosition >= 145){
        document.getElementById('hamburger-menu').classList.add('active')
      } else {
        document.getElementById('hamburger-menu').classList.remove('active')
        item.classList.remove('is-active')
        menu.classList.remove('isactive')
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  hamburgerClick(e) {
    let item = document.getElementById('hamburger-menu')
    let menu = document.getElementById('menu')
    let list = item.classList
    list.toggle('is-active')
    menu.classList.toggle('isactive')
  }

  navClick(evt, data) {
    let path = evt.target.innerHTML.split(' ')
    path = path[0].toLowerCase()
    window.location.href = `/${path}`
  }


  render() {


    return (
      <div className="main-view">
          <Parallax
            bgImage={"/assets/clouds2.png"}
            strength={100}>

            <div id="header-lander-container">
              <img id="header-logo" src="/assets/sollyslogo3.png"/>
                <div id="header-nav">
                  <div className="header-nav-item noselect" onClick={this.navClick} value="about">About</div>
                  <div className="header-nav-item noselect" onClick={this.navClick} value="scholarships">Scholarships</div>
                  <div className="header-nav-item noselect" onClick={this.navClick} value="events">Events</div>
                  <div className="header-nav-item noselect" onClick={this.navClick} value="donations">Donations</div>
                  <div className="header-nav-item noselect" onClick={this.navClick} value="photos">Photos</div>
                  <div className="header-nav-item noselect" onClick={this.navClick} value="contact">Contact</div>
                </div>
            </div>

              <div className="lander-container">
                <div id="logo-menu-container">

                  <div className='rem4-spacer' />

                  <div id="menu">
                    <div className="menu-item noselect" onClick={this.navClick} value="about">About</div>
                    <div className="menu-item noselect" onClick={this.navClick} value="scholarships">Scholarships</div>
                    <div className="menu-item noselect" onClick={this.navClick} value="events">Events</div>
                    <div className="menu-item noselect" onClick={this.navClick} value="donations">Donations</div>
                    <div className="menu-item noselect" onClick={this.navClick} value="photos">Photos</div>
                    <div className="menu-item noselect" onClick={this.navClick} value="contact">Contact</div>
                  </div>

                  <div id="hamburger-menu" className="hamburger hamburger--collapse js-hamburger" onClick={()=> this.hamburgerClick()}>
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                </div>
                  <center>
                      <div className="text-center-large">
                        Through our efforts and dedication, Solly’s Way Foundation
                        provides college scholarship opportunities to children
                        who have suffered a loss of a parent or guardian.
                      </div>
                  </center>
                </div>
            </Parallax>
            <Parallax
              bgImage={"/assets/mkray.png"}
              strength={200}
              blur={4}>
            <div id="golf-outing">
              <div className="text-center-medium">
                <center>
                    <div className="cursive">Thank you all!</div>
                    <div id="banner">
                      <img id="banner-img" src="/assets/banner.png"/>
                  </div>
                  <div className="text-box">
                    We would like to thank everyone who came out for the third golf
                    outing at Makray Memorial Golf Club. It was a beautiful day and we
                    are so fortunate to have such great family and friends supporting
                    this cause. Funds raised at Solly’s Way Foundation Golf Outing go
                    towards providing college scholarships for students who have suffered
                    from losing a parent.
                  </div>
                  <div className="click-here-to-text noselect"> click here to view event photos</div>
                  <img id="mkray-logo" src="/assets/mkraylogo.png" />
                </center>
              </div>
            </div>
          </Parallax>
          <Parallax
            className='donation-container-a'
            bgImage={"/assets/golf.png"}
            strength={0}
            blur={6}
            >
              <div className="donation-inner-container">
              <Plax
                className="donation-text-a"
                offsetXMax={0}
                offsetXMin={8}
                slowerScrollRate
                >
                You don't golf, we understand!
                </Plax>
              </div>
              </Parallax>
                <div className="donation-inner-container">
                  <Parallax
                    className='donation-container-b'
                    bgImage={"/assets/bluebg.png"}
                    strength={10}
                    >
                      <Plax
                          className="donation-text-b"
                          offsetXMax={0}
                          offsetXMin={0}
                          slowerScrollRate
                      >
                      Donations are always appreciated.
                      </Plax>
                    <Plax
                        className="donation-text-c"
                        offsetXMax={0}
                        offsetXMin={0}
                        slowerScrollRate
                    >
                      Donations are being accepted online via PayPal,
                      <br/>or physically by mail.
                      <br/><br/>
                      Thank you for your support!
                      <div className="donate-button innershadow noselect"
                        onClick={() => window.location.href='https://www.paypal.com/donate/?token=x9bozIljc62F0gv-Qh-lvNf-kJ3yDnD4A_IC7FY_3XaAwvmITFdR8MQsn7L_WvnHBB87ZG&country.x=US&locale.x=US'}>
                        click here to donate
                      </div>
                    </Plax>
                    <Plax
                        className="donation-arrow"
                        offsetXMax={1150}
                        offsetXMin={1200}
                        slowerScrollRate
                    >
                    →
                  </Plax>
              </Parallax>
            </div>
            <Footer />
      </div>
    )
  }
}
