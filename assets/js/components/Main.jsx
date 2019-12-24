import React, { Component } from 'react'
import Header from './Header.jsx'
import Filters from './Filters.jsx'
import Listings from './Listings.jsx'
import Footer from './Footer.jsx'

export default class Main extends Component {
  constructor() {
    super()
  }

  render() {
    return (<div>
      <Header />
      <div>
        <Filters state={this.props.state.filter} listings={this.props.state.listings} change={this.props.change} />
        <Listings listings={this.props.state.filteredListings} change={this.props.change} sort={this.props.sort} />
      </div>
      <Footer />
    </div>)
  }
}