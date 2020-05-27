import React, { Component } from 'react'


export default class BannerFormatter extends Component {
  formatObject(evt) {
     let form = {
       description: document.getElementById('description'),
       width: document.getElementById('width'),
       height: document.getElementById('height'),
       urlen: document.getElementById('url-en'),
       urlfr: document.getElementById('url-fr'),
       alten: document.getElementById('alt-en'),
       altfr: document.getElementById('alt-fr')
     }

      let obj = {
      name: form.description.value,
      w: form.width.value,
      h: form.height.value,
      urlen: form.urlen.value,
      urlfr: form.urlfr.value,
      alten: form.alten.value,
      altfr: form.altfr.value
    }
    
    let formatted = `
      var ${obj.name} = {
          img: {
              en: "Banner_${obj.name}_${obj.w}x${obj.h}_EN.jpg",
              fr: "Banner_${obj.name}_${obj.w}x${obj.h}_FR.jpg" ,
              en_on: "Banner_${obj.name}_${obj.w}x${obj.h}_ON_EN.jpg",
              fr_on: "Banner_${obj.name}_${obj.w}x${obj.h}_ON_FR.jpg"
          },
          url: {
              en: "${obj.urlen}",
              fr: "${obj.urlfr}"
          },
          width: "${obj.w}",
          height: "${obj.h}",
          altText: {
              en: "${obj.alten}",
              fr: "${obj.altfr}"
          }
      };
    `
    document.getElementById('list').innerHTML = formatted
  }

  render(){
    return (
      <>
      <h1>Banner Formatter</h1>
        <div className="container">
          <div id="form">
            <h2>Details</h2>

            <div className="input-container">
              <label>description:</label>
              <input id="description"
              className="storeContainerInput"
              placeholder="CheesyBread, NowHiring, Coke"/>
            </div>

            <br/>
            <div className="input-container">
              <label>width:</label>
              <input id="width"
              className="storeContainerInput"
              placeholder="600"/>
            </div>

            <br/>
            <div className="input-container">
              <label>height:</label>
              <input id="height"
              className="storeContainerInput"
              placeholder="285"/>
            </div>

            <br/>
            <div className="input-container">
              <label>URL english:</label>
              <input id="url-en"
              className="storeContainerInput"
              placeholder="dominos.ca/en/...."/>
            </div>

            <br/>
            <div className="input-container">
              <label>URL french:</label>
              <input id="url-fr"
              className="storeContainerInput"
              placeholder="dominos.ca/fr/...."/>
            </div>

            <br/>
            <div className="input-container">
              <label>alt text english:</label>
              <input id="alt-en"
              className="storeContainerInput"
              placeholder="This is great Cheesy Bread!"/>
            </div>

            <br/>
            <div className="input-container">
              <label>alt text french:</label>
              <input id="alt-fr"
              className="storeContainerInput"
              placeholder="Oi Oi Pizza!"/>
            </div>

          </div>

           <div id="window">
            <h2>Copy this code</h2>
            <textarea id="list" className="storeContainer" readOnly></textarea>
           </div>

          </div>
          <br/><br/>
          <button onClick={(evt) => this.formatObject(evt)}>submit</button>
      </>
    )
  }
}
