import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import listings from './data/listings.js'
import Main from './components/Main.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      filter: {
        city: 'any',
        type: 'any',
        transmission: 'any',
        color: 'any',
        price_low: 0,
        price_high: 500,
        miles_low: 0,
        miles_high: 1000,
        sunroof: false,
        navigation: false,
        premium_audio: false,
        heated_seats: false,
        search: '',
      },
      listings,
      filteredListings: listings
    }

    this.change = this.change.bind(this)
    this.clear = this.clear.bind(this)
    this.sort = this.sort.bind(this)
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      listings: this.state.listings.sort((a, b) => new Date(b.user.postDate) - new Date(a.user.postDate))
    })
  }

  change(event) {
    const name = event.target.name
    const value = (event.target.type === "checkbox") ? event.target.checked : event.target.value
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        [name]: value,
      }
    }, () => {
      this.filter()
    })
  }

  clear() {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        search: ''
      }
    }, () => {
      document.querySelector("#search").value = ''
      this.filter()
    })
  }

  filter() {
    const filteredListings = this.state.listings
      .filter(l => (this.state.filter.city === 'any') ? true : l.vehicle.city === this.state.filter.city)
      .filter(l => (this.state.filter.type === 'any') ? true : l.vehicle.type === this.state.filter.type)
      .filter(l => (this.state.filter.transmission === 'any') ? true : l.vehicle.transmission === this.state.filter.transmission)
      .filter(l => (this.state.filter.color === 'any') ? true : l.vehicle.color === this.state.filter.color)
      .filter(l => (this.state.filter.sunroof === false) ? true : l.vehicle.features.sunroof === this.state.filter.sunroof)
      .filter(l => (this.state.filter.navigation === false) ? true : l.vehicle.features.navigation === this.state.filter.navigation)
      .filter(l => (this.state.filter.premium_audio === false) ? true : l.vehicle.features.premium_audio === this.state.filter.premium_audio)
      .filter(l => (this.state.filter.heated_seats === false) ? true : l.vehicle.features.heated_seats === this.state.filter.heated_seats)
      .filter(l => (
        l.vehicle.rate >= parseInt(this.state.filter.price_low) &&
        l.vehicle.rate <= parseInt(this.state.filter.price_high)
      ))
      .filter(l => {
        const vehicle = `${l.vehicle.manufacturer.toLowerCase()} ${l.vehicle.model.toLowerCase()} ${l.vehicle.year}`
        return this.state.filter.search.toLowerCase().split(' ')
          .filter(word => word !== '')
          .map(word => vehicle.search(word))
          .every(value => value > -1)
      })

      this.setState({
      ...this.state,
      filteredListings
    })
  }

  sort(event) {
    const value = event.target.value

    if (value === 'newest') {
      this.setState({
        ...this.state,
        listings: this.state.listings.sort((a, b) => new Date(b.user.postDate) - new Date(a.user.postDate))
      })
    }

    if (value === 'oldest') {
      this.setState({
        ...this.state,
        listings: this.state.listings.sort((a, b) => new Date(a.user.postDate) - new Date(b.user.postDate))
      })
    }
  }

  showmenu() {
    document.getElementById('sidemenu').classList.toggle('show')
  }

  hidemenu() {
    document.getElementById('sidemenu').classList.toggle('show')
  }

  render() {
    return (<Main state={this.state} change={this.change} clear={this.clear}
                  sort={this.sort} showmenu={this.showmenu} hidemenu={this.hidemenu} />);
  }
}

const app = document.querySelector('#app');
ReactDOM.render(<App />, app);