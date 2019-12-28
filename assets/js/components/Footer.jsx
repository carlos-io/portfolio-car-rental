import React, { Component } from 'react'

export default class Footer extends Component {
  constructor() {
    super()
  }

  render() {
    return (<footer>
      <div className="app">
        <div className="phone">
          <div className="body">
            <div className="sensor"></div>
            <div className="camera"></div>
            <div className="speaker"></div>
            <div className="screen">
              <div className="logo"></div>
            </div>
          </div>
        </div>
        <div className="download">
          <div className="call2action">Download CarRental App</div>
          <div className="proposition">Use our app to have 12,124 rental cars at hand</div>
          <a href="javascript:void(0)">
            <div className="playstore">
              <span className="icon"><i className="fab fa-google-play"></i></span>
              <span className="storename">Playstore</span>
            </div>
          </a>
          <a href="javascript:void(0)">
            <div className="appstore">
              <span className="icon"><i className="fab fa-apple"></i></span>
              <span className="storename">AppStore</span>
            </div>
          </a>
          <div className="socialmedia">
            <a href="javascript:void(0)">
              <div className="facebook">
                <i className="fab fa-facebook-f"></i>
              </div>
            </a>
            <a href="javascript:void(0)">
              <div className="twitter">
                <i className="fab fa-twitter"></i>
              </div>
            </a>
          </div>
          <div className="copyright">
            2018 - 2019 CarRental. All Rights Reserved
          </div>
        </div>
      </div>
      <div className="sitemap">
        <div className="tenants">
          <div className="title">
            For Renters
          </div>
          <div className="links">
            <ul>
              <li><a href="javascript:void(0)">About CarRental</a></li>
              <li><a href="javascript:void(0)">Sign Up for free</a></li>
              <li><a href="javascript:void(0)">About Us</a></li>
              <li><a href="javascript:void(0)">CarRental App</a></li>
            </ul>
          </div>
        </div>
        <div className="advertisers">
          <div className="title">
            For Advertisers
          </div>
          <div className="links">
            <ul>
              <li><a href="javascript:void(0)">About CarRental</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>)
  }
}