import React, {Component} from 'react'
import history from '../history'

export default class Header extends Component {
  constructor(){
    super()
    this.state: {
      location: ""
    }
  }

  render() {
    return (
      <div className="header-container">
        <div className="flex-container">
          <img className="logo-md" src="/assets/logos/dpc.png"/>
          <div className="nav-title">DPC Toolkit</div>
        </div>
        <div className="flex-container">
          <div name="banner" className="nav-item" onClick={() => history.push('/banner')}>Banner Formatter</div>
          <div name="storelist" className="nav-item" onClick={() => history.push('/storelist')}>Store List Formatter</div>
          <div name="subjectline" className="nav-item" onClick={() => history.push('/subjectlines')}>Subject Line Formatter</div>
        </div>
      </div>
    )
  }
}
