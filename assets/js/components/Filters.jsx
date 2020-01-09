import React, { Component } from 'react'

export default class Filters extends Component {
  constructor() {
    super()
    this.price_min = 0
    this.price_max = 500
    this.price_gap = 65
    this.updateSlider = this.updateSlider.bind(this)
  }

  updateSlider(event) {
    const slider = event.target.name.split('_')[1]
    const grayFill = event.target.previousSibling
    const labels = event.target.parentElement.querySelectorAll('span')
    const opposingThumb = event.target.getAttribute('data-opposite')
    const opposingValue = parseInt(document.querySelector('#' + opposingThumb).value)
    const value = parseInt(event.target.value)
    if (slider === "low" && value < (opposingValue - this.price_gap)) {
      grayFill.style = `width: ${value/this.price_max*100}%`
      labels[0].innerText = '$' + value
      this.props.change(event)
    }
    if (slider === "high" && value > (opposingValue + this.price_gap)) {
      grayFill.style = `width: ${100-(value/this.price_max*100)}%`
      labels[1].innerText = '$' + value
      this.props.change(event)
    }
  }

  render() {
    const vehicles = [...new Set(this.props.listings.map(l => l.vehicle.city))].sort()
    const types = [...new Set(this.props.listings.map(l => l.vehicle.type))].sort()
    const transmissions = [...new Set(this.props.listings.map(l => l.vehicle.transmission))].sort()
    const colors = [...new Set(this.props.listings.map(l => l.vehicle.color))].sort()

    return (<section id="filters">
      <div className="title">FILTER</div>
      <div className="select city" onChange={this.props.change}>
        <label htmlFor="city">City</label>
        <select name="city" id="city">
          <option value="any" selected>Any</option>
          { vehicles.map(city => <option value={city}>{city}</option>) }
        </select>
      </div>
      <div className="select type">
        <label htmlFor="type">Type of Car</label>
        <select name="type" id="type" onChange={this.props.change}>
          <option value="any" selected>Any</option>
          { types.map(type => <option value={type}>{type}</option>) }
        </select>
      </div>
      <div className="select transmission">
        <label htmlFor="transmission">Transmission</label>
        <select name="transmission" id="transmission" onChange={this.props.change}>
          <option value="any" selected>Any</option>
          { transmissions.map(transmission => <option value={transmission}>{transmission}</option>) }
        </select>
      </div>
      <div className="select color">
        <label htmlFor="color">Color</label>
        <select name="color" id="color" onChange={this.props.change}>
          <option value="any" selected>Any</option>
          { colors.map(color => <option value={color}>{color}</option>) }
        </select>
      </div>
      <div className="slider price">
        <div className="base-fill"></div>
        <label htmlFor="price">Price</label>
        <div className="low-fill"></div>
        <input type="range" min={this.price_min} max={this.price_max} step="1" value={this.props.state.price_low}
               id="price_low" name="price_low" data-opposite="price_high" onChange={this.updateSlider}/>
        <div className="high-fill"></div>
        <input type="range" min={this.price_min} max={this.price_max} step="1" value={this.props.state.price_high}
               id="price_high" name="price_high" data-opposite="price_low" onChange={this.updateSlider}/>
        <span>${this.price_min}</span>
        <span>${this.price_max}</span>
      </div>
{/*YEARS       <div className="slider miles">
        <div className="base-fill"></div>
        <label htmlFor="miles">Miles</label>
        <div className="low-fill"></div>
        <input type="range" min="0" max="100" value={this.props.state.miles_low}
               id="miles_low" name="miles_low" data-opposite="miles_high" onChange={this.updateSlider}/>
        <div className="high-fill"></div>
        <input type="range" min="0" max="100" value={this.props.state.miles_high}
               id="miles_high" name="miles_high" data-opposite="miles_low" onChange={this.updateSlider}/>
        <span>0</span>
        <span>100</span>
      </div> */}
      <div className="features">Features</div>
      <div className="checkbox sunroof">
        <label htmlFor="sunroof">Sunroof</label>
        <input type="checkbox" name="sunroof" id="sunroof" onChange={this.props.change}/>
        <span className="checkmark"><i class="fa fa-check"></i></span>
      </div>
      <div className="checkbox navigation">
        <label htmlFor="navigation">Navigation System</label>
        <input type="checkbox" name="navigation" id="navigation" onChange={this.props.change}/>
        <span className="checkmark"><i class="fa fa-check"></i></span>
      </div>
      <div className="checkbox premium-audio">
        <label htmlFor="premium_audio">Premium Audio</label>
        <input type="checkbox" name="premium_audio" id="premium_audio" onChange={this.props.change}/>
        <span className="checkmark"><i class="fa fa-check"></i></span>
      </div>
      <div className="checkbox heated-seats">
        <label htmlFor="heated_seats">Heated Seats</label>
        <input type="checkbox" name="heated_seats" id="heated_seats" onChange={this.props.change}/>
        <span className="checkmark"><i class="fa fa-check"></i></span>
      </div>
    </section>)
  }
}