import React, { Component } from 'react'

export default class Listings extends Component {
  constructor() {
    super()
    this.showListings = this.showListings.bind(this)
  }

  showListings() {
    const pagination = document.getElementById('pagination')

    if (this.props.listings.length === 0) {
      pagination.style.display = 'none'
      return <div>No matching listings found.</div>
    }

    if (pagination) {
      pagination.style.display = 'block'
    }

    return this.props.listings.map(l => (
      <div className="card">
        <div className="top" style={{ background: `url(${l.vehicle.image}) center/100% 100% no-repeat` }}>
          <div className="vehicle">{l.vehicle.year} {l.vehicle.manufacturer} {l.vehicle.model}</div>
          <div className="overlay">
            <div className="user">
              <div className="avatar" style={{ background: `url(${l.user.image}) center/100% 100% no-repeat` }}></div>
              <div className="name-postdate">
                <div>{l.user.name}</div>
                <div>Posted on {l.user.postDate}</div>
              </div>
            </div>
            <div className="details">
              <div>
                <span><i className={`fa ${l.vehicle.typeIcon}`}></i> {l.vehicle.type}</span>
                <span><i className="fa fa-cog"></i> {l.vehicle.transmission}</span>
                {(l.vehicle.features.sunroof) ? (<span><i className="fa fa-sun"></i> sunroof</span>) : ''}
                {(l.vehicle.features.navigation) ? (<span><i className="fa fa-location-arrow"></i> nav</span>) : ''}
                {(l.vehicle.features.premium_audio) ? (<span><i className="fa fa-music"></i> audio</span>) : ''}
                {(l.vehicle.features.heated_seats) ? (<span><i className="fa fa-chair"></i> heated</span>) : ''}
              </div>
            </div>
            <div className="rent-btn">
              Rent
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="dailyfee">
            ${l.vehicle.rate} / day
          </div>
          <div className="location">
            <i className="fa fa-map-marker-alt"></i>
            <span>{l.vehicle.city} {l.vehicle.state}</span>
          </div>
        </div>
      </div>))
  }

  render() {
    const count = this.props.listings.length

    return (<section id="listings">
      <div className="search">
        <span><input type="text" name="search" id="search" placeholder="Enter Your Ride" onChange={this.props.change} /></span>
        <a onClick={this.props.clear} style={{ cursor: 'pointer' }}><span>+</span></a>
      </div>
      <div className="found-filter">
        <div className="found">{count} result{(count === 1) ? '' : 's'} found</div>
        <div className="filter">
          <span className="order">
            <select name="order" id="order" onChange={this.props.sort}>
              <option value="newest" selected>Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </span>
        </div>
      </div>
      <div className="cards">
        {this.showListings()}
      </div>
      <div id="pagination" className="pagination">
        <div class="previous">prev</div>
        <div className="number active"><div><span>1</span></div></div>
        {/* <div className="number"><div><span>2</span></div></div> */}
        <div className="next">next</div>
      </div>
    </section>)
  }
}