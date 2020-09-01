import React, { Component } from 'react'


export default class ReynoldsFormatter extends Component {


  offerCode2(evt) {
    let typeCheck = (str) => {
      if(str === "|") return true
      else return false
    }
    //offer string manipulation
    let str = document.getElementById("offerCode").value.trim()
    str = str.split(" ")
    // user variables
    let fq = document.getElementById("fq").value
    let price = document.getElementById("price").value
    let quantity = document.getElementById("quantity").value
    // pulled variables
    let store = []
    let brand = str[1]
    let storeFormat = str.slice(3, str.length-1)
    if(typeCheck(brand)) {
      brand = str[2]
      storeFormat = str.slice(6, str.length-2)
    }
    storeFormat.forEach((el, idx) => { el.length && store.push(el) })
    store = store.join("_")
    let storeCode = str[str.length-1]
    let offerType = str[2]
    if(offerType.length <= 3) { offerType = str[4] }
    if(offerType.charAt(offerType.length-1) == "-") {
      offerType = offerType.slice(0, offerType.length-1)
    }
    // return feed
    document.getElementById('formatted').innerHTML =
    brand + " | " +
    store + " | " +
    fq + " | " +
    price + " | " +
    quantity + " | " +
    storeCode + " | " +
    offerType
  }

    copyText() {
    var copyText = document.getElementById("formatted");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    document.getElementById("copied").classList.remove("hidden")
    setTimeout(function(){document.getElementById("copied").classList.add("hidden"); }, 3000);
  }


  render(){
    return (
      <>
      <h1 style={{margin: "0px"}}>REYNOLDS Offer Formatter</h1>
        <div className="container flex-column">
          <center>
          <div id="form" className="flex-center">
            <h2>Enter offer string</h2>
            <textarea className="storeContainer xsm" id="offerCode"
              placeholder="offer code" /><br/>
            <h4>Variables</h4>
            <label>Frequency</label> <br/>
            <input id="fq"/> <br/>
            <label>Price</label> <br/>
            <input id="price"/> <br/>
            <label>Quantity</label> <br/>
            <input id="quantity"/> <br/>
          </div>
        </center>
        </div>
        <button onClick={(evt) => this.offerCode2(evt)}>submit</button>
        <div className="flex-column">
          <h2>Copy this code</h2>
          <textarea className="storeContainer xsm text-small text-center" id="formatted" />
          <button onClick={this.copyText}>copy</button>
          <h4 id="copied" className="hidden text-center"> COPIED </h4>
        </div>
      </>
    )
  }
}
