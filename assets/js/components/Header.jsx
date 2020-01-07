import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (<header>
      <div className="container">
        <div className="logo">
          <div className="car">
            <a href="#">
              <div><i className="fas fa-car"></i></div>
              <div>RentCar</div>
            </a>
          </div>
        </div>
        <nav>
          <div id="hamburger" onClick={this.props.showmenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div id="links">
            <a href="javascript:void(0)">List Your Ride</a>
            <a href="javascript:void(0)">About Us</a>
            <a href="javascript:void(0)">Log In</a>
            <a href="javascript:void(0)"><span className="register-btn">Register</span></a>
          </div>
        </nav>
      </div>
    </header>)
  }
}