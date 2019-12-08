import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (<header>
      <div className="container">
        <div className="logo">Logo</div>
        <nav>
          <a href="javascript:void(0)">Create Ads</a>
          <a href="javascript:void(0)">About Us</a>
          <a href="javascript:void(0)">Log In</a>
          <a href="javascript:void(0)"><span className="register-btn">Register</span></a>
        </nav>
      </div>
    </header>)
  }
}