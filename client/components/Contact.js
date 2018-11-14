'use strict';

import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux';
import { addContact } from '../store'

function phoneFormat(input){
     // Strip all characters from the input except digits
     input = input.replace(/\D/g,'');
     // Trim the remaining input to ten characters, to preserve phone number format
     input = input.substring(0,10);
     // Based upon the length of the string, we add formatting as necessary
     let size = input.length;
     if (size == 0){
             input = input;
     } else if(size < 4) {
             input = '(' + input;
     } else if(size < 7) {
             input = '(' + input.substring(0,3) + ')' + input.substring(3,6);
     } else {
       input = '(' + input.substring(0,3) + ')' + input.substring(3,6) + '-'+ input.substring(6,10);
     }
     return input;
}

class Contact extends Component {

  constructor(props){
  super(props)
    this.createSubmit = this.createSubmit.bind(this);
  }

  // A function to determine if the pressed key is an integer
   phoneInput(evt){
     // Format the phone number as the user types it
     let phoneNumber = document.getElementById('phoneNumber');
     let charCode = (evt.which) ? evt.which : evt.keyCode;
     phoneNumber.value = phoneFormat(phoneNumber.value);
     document.getElementById('phoneNumber').value = phoneFormat(document.getElementById('phoneNumber').value);
     if(charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)){
       return false;
     }
     return true;
  }

  render() {

    return (
      <div className="sub-page-main">
        <Header />
        <div className="sub-page-content">
          <div className="sub-page-title">Contact</div>
          <br/><br/>
          <form
            id="contact-form"
            onSubmit={(event) => this.createSubmit(event)}
            >

            <div className="form-basic">

              <div className="form-slot">
                <div className="form-label">Full Name:</div>
                <input className="form-input-2" type="text" name="name" required />
              </div>

              <div className="form-slot">
                <div className="form-label">Company:</div>
                <input className="form-input-2" name="company" placeholder='(optional)'/>
              </div>

              <div className="form-slot">
                <div className="form-label">City:</div>
                <input className="form-input-2" name="city" required />
              </div>

              <div className="form-slot">
                <div className="form-label">State:</div>
                <input className="form-input-2" name="state" required />
              </div>

              <div className="form-slot">
                <div className="form-label">Phone:</div>
                <input
                  id="phoneNumber"
                  className="form-input-2"
                  type="tel-national"
                  name="phone"
                  placeholder='(123)456-7890'
                  onKeyPress={this.phoneInput}
                  maxLength="13"
                  required />
              </div>

              <div className="form-slot">
                <div className="form-label">E-Mail:</div>
                <input className="form-input-2" type="email" name="email" required />
              </div>

              <div className="form-slot-message">
                <div className="form-label-large"> Questions, Comments, or Concerns:</div>
                <textarea type="input" className="form-message" name="comment" required />
              </div>

            </div>
            <button className="button-standard"> submit </button>
          </form>
        </div>
        <Footer />
      </div>
    )
  }

  createSubmit(event, contact) {
    event.preventDefault();
    let evt = event.target
    const newContactSumbission = Object.assign({}, contact,
      {
        name: evt.name.value,
        email: evt.email.value,
        company: evt.company.value,
        city: evt.city.value,
        state: evt.state.value,
        phone: evt.phone.value,
        comment: evt.comment.value
      }
    )
    this.props.addContact(newContactSumbission);
  }

}

const mapStateToProps = ({ contacts }) => ({ contacts });

const mapDispatchToProps = { addContact };

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
