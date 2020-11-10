import React, { Component } from 'react'


export default class BadStores extends Component {


  formatter() {
    let list = [];
    let input = document.getElementById('badstorelist').value.split(',')
    input.forEach(el => {
      list.push(`([target/@custStore_number] = ${el.trim()})`)
    })
    list = list.join().replace(/,/g, ' OR ').split();
    document.getElementById("formatted").innerHTML = list
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
      <h1 style={{margin: "0px"}}>Bad Stores Formatter</h1>
        <div className="container flex-column">
          <center>
          <div id="form" className="flex-center">
            <h2>Enter store list</h2>
            <textarea className="storeContainer xsm" id="badstorelist"
              placeholder="enter store list" />
          </div>
        </center>
        </div>
        <button onClick={this.formatter}>submit</button>
        <div className="flex-column">
          <h2>Copy this code</h2>
          <textarea className="storeContainer md text-center" id="formatted" />
          <button onClick={this.copyText}>copy</button>
          <h4 id="copied" className="hidden text-center"> COPIED </h4>
        </div>
      </>
    )
  }
}
