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
      <SideMenu hidemenu={this.props.hidemenu} state={this.props.state.filter} listings={this.props.state.listings} change={this.props.change} />
      <Header showmenu={this.props.showmenu} />
      <div>
        <Filters state={this.props.state.filter} listings={this.props.state.listings} change={this.props.change} />
        <Listings listings={this.props.state.filteredListings} change={this.props.change} clear={this.props.clear} sort={this.props.sort} />
      </div>
      <Footer />
    </div>)
  }
}