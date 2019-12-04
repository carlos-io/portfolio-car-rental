import React, { Component } from 'react'

export default class Listings extends Component {
  constructor() {
    super()
  }

  render() {
    return (<section id="listings">
      <div className="search">
        <span><input type="text" name="search" id="search" placeholder="Find Your Ride" /></span>
        <a href="javascript:void(0)"><span>X</span></a>
      </div>
      <div>
        <div className="found">n results found</div>
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
                <div className="name">Martina Crevatin</div>
                <div className="postdate">Posted on 05/09/17</div>
              </div>
              <div className="details">
                <span>n miles</span>
                <span>n seats</span>
              </div>
              <div className="rent-btn">
                Rent
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="dailyfee">
              $N / day
            </div>
            <div className="location">
              New York
            </div>
          </div>
        </div>
      </div>
      <div className="pagination">
        <div class="previous">prev</div>
        <div className="number">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
        <div className="number">4</div>
        <div className="next">next</div>
      </div>
    </section>)
  }
}