import React, { Component } from 'react'


export default class StoreListFormatter extends Component {

updateValue(e) {
  let userList = e.target.value.split(',');
  // store list formatter function
  function storeFormat(arr) {
    let obj = {}
    arr.forEach(el => {
      el = el.trim()
      el = '"' + el + '"'
      obj[el] = ""
    })
    let values = '{'
    for(let key in obj) {
     values += key + ':' + key[0] + '"' + ','
    }
    // populate return text area
    document.getElementById('list').innerHTML = values.slice(0,-1) + "};"
  }
  // call format function with updated list
  storeFormat(userList)
}


  render(){
    return (
      <>
      <h1>Storelist Formatter</h1>
        <div className="container">
          <div id="form-2">
            <h2>unformatted</h2>
            <p>input store list below separated by a comma</p>
            <textarea className="storeContainer sm" id="inputContainter" onChange={this.updateValue}/>
          </div>
          <div>
            <h2>formatted</h2>
            <p>updated list will populate after stores are entered</p>
            <textarea className="storeContainer sm" id="list" />
          </div>
        </div>
      </>
    )
  }
}
