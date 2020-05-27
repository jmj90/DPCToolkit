import React, {Component} from 'react'
import history from '../history'

export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      location: ""
    }
  }

  componentDidMount() {
    this.setState({
      location: history.location.pathname
    })
  }


  navHandler(evt) {
    let id = evt.target.id
    let links = document.querySelectorAll("div.nav-item")
    links.forEach(link => {
      link.classList.remove('active')})
    this.setState({
      location: id
    })
    document.getElementById(id).classList.add('active')
    history.push(`/${id}`)
  }

  render() {
    return (
      <div className="header-container">
        <div className="flex-container">
          <img className="logo-md" src="/assets/logos/dpc.png"/>
          <div className="nav-title">DPC Toolkit</div>
        </div>
        <div className="flex-container">
          <div id="banner" className="nav-item" onClick={(evt) => this.navHandler(evt)}>Banner Formatter</div>
          <div id="storelist" className="nav-item" onClick={(evt) => this.navHandler(evt)}>Store List Formatter</div>
          <div id="subjectlines" className="nav-item" onClick={(evt) => this.navHandler(evt)}>Subject Line Formatter</div>
        </div>
      </div>
    )
  }
}
