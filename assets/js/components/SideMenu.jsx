import React, { Component } from 'react'
import Filters from './Filters.jsx'

export default class SideMenu extends Component {
  constructor() {
    super()
  }

  render() {
    return (<div id="sidemenu">
      <div id="close" onClick={this.props.hidemenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div id="links">
        <a href="javascript:void(0)">List Your Ride</a>
        <a href="javascript:void(0)">About Us</a>
        <a href="javascript:void(0)">Log In</a>
        <a href="javascript:void(0)">Register</a>
      </div>
      <Filters state={this.props.state}
               listings={this.props.listings}
               change={this.props.change} />
    </div>)
  }
}