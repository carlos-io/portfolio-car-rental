import React, { Component } from 'react'

export default class Filters extends Component {
  constructor() {
    super()
    this.state = {
      price_low: 0,
      price_high: 100,
      miles_low: 0,
      miles_high: 100
    }
    this.updateSlider = this.updateSlider.bind(this)
  }

  updateSlider(event) {
    const slider = event.target.name.split('_')[1]
    const grayFill = document.querySelector('#' + event.target.name).previousSibling
    const labels = document.querySelector('#' + event.target.name).parentElement.querySelectorAll('span')
    const opposingThumb = event.target.getAttribute('data-opposite')
    const opposingValue = parseInt(document.querySelector('#' + opposingThumb).value)
    const value = parseInt(event.target.value)
    if (slider === "low" && value < (opposingValue - 8)) {
      this.setState({ [event.target.name]: value })
      grayFill.style = `width: ${value}%`
      labels[0].innerText = '$' + value
    }
    if (slider === "high" && value > (opposingValue + 8)) {
      this.setState({ [event.target.name]: value })
      grayFill.style = `width: ${100-value}%`
      labels[1].innerText = '$' + value
    }
  }

  render() {
    return (<section id="filters">
      <div className="title">FILTER</div>
      <div className="select city">
        <select name="city" id="city">
          <option value="" disabled selected hidden>City</option>
          <option value="New York">New York</option>
          <option value="Philadelphia">Philadelphia</option>
        </select>
      </div>
      <div className="select type">
        <select name="type" id="type">
          <option value="" disabled selected hidden>Type of Car</option>
          <option value="SUV">SUV</option>
          <option value="Convertible">Convertible</option>
        </select>
      </div>
      <div className="select transmission">
        <select name="transmission" id="transmission">
          <option value="" selected disabled hidden>Transmission</option>
          <option value="automatic">automatic</option>
          <option value="manual">manual</option>
        </select>
      </div>
      <div className="select color">
        <select name="color" id="color">
          <option value="" selected disabled hidden>Color</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="black">black</option>
        </select>
      </div>
      <div className="slider price">
        <div className="base-fill"></div>
        <label htmlFor="price">Price</label>
        <div className="low-fill"></div>
        <input type="range" min="0" max="100" step="1" value={this.state.price_low}
               id="price_low" name="price_low" data-opposite="price_high" onChange={this.updateSlider}/>
        <div className="high-fill"></div>
        <input type="range" min="0" max="100" step="1" value={this.state.price_high}
               id="price_high" name="price_high" data-opposite="price_low" onChange={this.updateSlider}/>
        <span>$0</span>
        <span>$100</span>
      </div>
      <div className="slider miles">
        <div className="base-fill"></div>
        <label htmlFor="miles">Miles</label>
        <div className="low-fill"></div>
        <input type="range" min="0" max="100" value={this.state.miles_low}
               id="miles_low" name="miles_low" data-opposite="miles_high" onChange={this.updateSlider}/>
        <div className="high-fill"></div>
        <input type="range" min="0" max="100" value={this.state.miles_high}
               id="miles_high" name="miles_high" data-opposite="miles_low" onChange={this.updateSlider}/>
        <span>0</span>
        <span>100</span>
      </div>
      <div className="features">Features</div>
      <div className="checkbox sunroof">
        <label htmlFor="sunroof">Sunroof</label>
        <input type="checkbox" name="sunroof" id="sunroof"/>
        <span className="checkmark"><i class="fa fa-check"></i></span>
      </div>
      <div className="checkbox premium-sound">
        <label htmlFor="premium_sound">Premium Sound</label>
        <input type="checkbox" name="premium_sound" id="premium_sound"/>
        <span className="checkmark"><i class="fa fa-check"></i></span>
      </div>
      <div className="checkbox navigation">
        <label htmlFor="navigation">Navigation</label>
        <input type="checkbox" name="navigation" id="navigation"/>
        <span className="checkmark"><i class="fa fa-check"></i></span>
      </div>
    </section>)
  }
}