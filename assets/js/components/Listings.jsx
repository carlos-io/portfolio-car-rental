import React, { Component } from 'react'

export default class Listings extends Component {
  constructor() {
    super()
  }

  render() {
    return (<section id="listings">
      <div className="search">
        <span><input type="text" name="search" id="search" placeholder="Find Your Ride" /></span>
        <a href="javascript:void(0)"><span>+</span></a>
      </div>
      <div className="found-filter">
        <div className="found">0 results found</div>
        <div className="filter">
          <span className="order">
            <select name="order" id="order">
              <option value="newest" selected>Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </span>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="top">
            <div className="vehicle">Car</div>
            <div className="overlay">
              <div className="user">
                <div className="avatar"></div>
                <div className="name-postdate">
                  <div>Martina Crevatin</div>
                  <div>Posted on 05/09/17</div>
                </div>
              </div>
              <div className="details">
                <span>0 miles</span>
                <span>0 seats</span>
              </div>
              <div className="rent-btn">
                Rent
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="dailyfee">
              $0 / day
            </div>
            <div className="location">
              <i className="fa fa-map-marker"></i>
              <span>New York</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination">
        <div class="previous">prev</div>
        <div className="number"><div>1</div></div>
        <div className="number"><div>2</div></div>
        <div className="number"><div>3</div></div>
        <div className="number"><div>4</div></div>
        <div className="next">next</div>
      </div>
    </section>)
  }
}