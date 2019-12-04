import React, { Component } from 'react'
import Header from './Header.jsx'
import Filters from './Filters.jsx'
import Listings from './Listings.jsx'
import Footer from './Footer.jsx'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (<div className="container">
      <Header />
      <Filters />
      <Listings />
      <Footer />
    </div>)
  }
}