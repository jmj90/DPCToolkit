import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Parallax, Background } from 'react-parallax';

export default class Donations extends Component {

  render() {

    return (
      <div className="scholarship-page-main">
        <Header />
          <Parallax
            bgImage={"/assets/photos/braclets.jpg"}
            strength={800}
            blur={2}>
            <center>
              <div className="scholarship-title"> Donations </div>
              <div className="scholarship-header-content">
                <div className="scholarship-text-large">
                  Your donations have and continue to assist a young student
                  make their way to college. On behalf of our foundation and the students
                  that have been granted a scholarship, we would like to thank you
                  for any contribution you make to the Solly's Way Foundation.
                  <br/>
                  <br/>
                </div>
              </div>
            </center>
          </Parallax>
          <div className="sub-page-main donate">
            <div className="sub-page-content">
              <div className="page-text-large">
                <br/><br/>
                <center>
                Donations are accepted online via credit card and PayPal
                (both can be accessed through PayPal), by phone, or by mail.
                <br/>
                <form id="donate-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_donations" />
                  <input type="hidden" name="business" value="sharyn12345@comcast.net" />
                  <input type="hidden" name="lc" value="US" />
                  <input type="hidden" name="item_name" value="Solly's Way Foundation" />
                  <input type="hidden" name="item_number" value="Online Donation" />
                  <input type="hidden" name="no_note" value="0" />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input type="hidden" name="bn" value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest" />
                  <button id="paypal-button" name="submit"> Donate Online </button>
                  <img id="paypal-cards" src="/assets/paypal-cards.png" />
                </form>
                  <div className="page-text-fine">
                    <center>
                      * A Paypal account is <b>not</b> required to make a donation
                    </center>
                  </div>
                  <br/>
                  or call 847.804.0210
              </center>
              </div>
              <br/>
              <div className="page-text-small">
                <center>
                  If you have any questions regarding donations,
                  please don't hesisate to ask or voice your concerns
                  at the link below
                </center>
              </div>

              <div className="page-link-button" onClick={() => window.location.href = `/contact`}>
                contact
              </div>
              <br/>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}
