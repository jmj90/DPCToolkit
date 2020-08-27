import React, { Component } from 'react'


export default class SubjectlineFormatter extends Component {

formatSubjectlines(e) {
  let sl = {
    en_dyn: document.getElementById('sl-en-dyn').value,
    en_stat: document.getElementById('sl-en-stat').value,
    fr_dyn: document.getElementById('sl-fr-dyn').value,
    fr_stat: document.getElementById('sl-fr-stat').value,
  }

  let formattedEN_DYN = "EN: " + sl.en_dyn.replace('$PRICE$', '$<%= context.targetData.offer_price_1_en %>')
  let formattedFR_DYN = "FR: "  + sl.fr_dyn.replace('$PRICE$', '<%= context.targetData.offer_price_1_fr %> $')

  document.getElementById('list').innerHTML =
  `**Static Subject Lines:**

EN: ${sl.en_stat}

FR: ${sl.fr_stat}

**Dynamic Subject Lines:**

${formattedEN_DYN}

${formattedFR_DYN}`
  }

  copyText() {
  var copyText = document.getElementById("list");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  alert("Copied!");
}


  render(){
    return (
      <>
      <p className="text-small">updated to ACS format [08/27/2020]</p>
      <h1 style={{margin: "0px"}}>Subject Line Formatter</h1>
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
          <div className="flex-column">
            <h2>Copy this code</h2>
            <textarea className="storeContainer" readOnly id="list" />
            <button onClick={this.copyText}>copy</button>
          </div>
        </div>
        <button onClick={(evt) => this.formatSubjectlines(evt)}>submit</button>
      </>
    )
  }
}
