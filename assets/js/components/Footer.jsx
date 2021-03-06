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
              <div className="logo">
                <div className="car"><i className="fas fa-car"></i></div>
                <div><span>Rent</span><span>Car</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="download">
          <div className="call2action">Download the RentCar App</div>
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
            2018 - 2019 RentCar. All Rights Reserved
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
              <li><a href="javascript:void(0)">About RentCar</a></li>
              <li><a href="javascript:void(0)">Sign Up for free</a></li>
              <li><a href="javascript:void(0)">About Us</a></li>
              <li><a href="javascript:void(0)">RentCar App</a></li>
            </ul>
          </div>
        </div>
        <div className="advertisers">
          <div className="title">
            For Advertisers
          </div>
          <div className="links">
            <ul>
              <li><a href="javascript:void(0)">About RentCar</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>)
  }
}