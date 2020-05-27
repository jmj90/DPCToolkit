import React, { Component } from 'react'


export default class SubjectlineFormatter extends Component {

formatSubjectlines(e) {
  let sl = {
    en_dyn: document.getElementById('sl-en-dyn').value,
    en_stat: document.getElementById('sl-en-stat').value,
    fr_dyn: document.getElementById('sl-fr-dyn').value,
    fr_stat: document.getElementById('sl-fr-stat').value,
  }

  let formattedEN_DYN = 'var enSubject = "' + sl.en_dyn.replace('$PRICE$', '$" + pricePlaceHolder + "') + '";'
  let formattedFR_DYN = 'var frSubject = "' + sl.fr_dyn.replace('$PRICE$', '" + pricePlaceHolder + " $') + '";'

  document.getElementById('list').innerHTML = `
  ${formattedEN_DYN}
  ${formattedFR_DYN}

  var enSubjectStatic = "${sl.en_stat}";
  var frSubjectStatic = "${sl.fr_stat}";
  `
}


  render(){
    return (
      <>
      <h1>Subject Line Formatter</h1>
      <p>type <b>$PRICE$</b> where amount should go</p>
        <div className="container">
          <div id="form-2">
            <h2>Enter subject lines</h2>
            <label>English Dynamic</label><br/>
            <textarea className="storeContainer sm" id="sl-en-dyn"
              placeholder="... large pizza for just $PRICE$!" />
            <br/>
            <label>English Static</label><br/>
            <textarea className="storeContainer sm" id="sl-en-stat"
              placeholder="... large pizza for a great price!" />
            <br/>
            <label>French Dynamic</label><br/>
            <textarea className="storeContainer sm" id="sl-fr-dyn"
              placeholder="... garnitures pour seulement $PRICE$!" />
            <br/>
            <label>French Static</label><br/>
            <textarea className="storeContainer sm" id="sl-fr-stat"
              placeholder="... garnitures à un prix fabuleux!" />
          </div>
          <div>
            <h2>Copy this code</h2>
            <textarea className="storeContainer" readOnly id="list" />
          </div>
        </div>
        <button onClick={(evt) => this.formatSubjectlines(evt)}>submit</button>
      </>
    )
  }
}
