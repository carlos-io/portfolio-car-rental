import React, { Component } from 'react'

export default class Filters extends Component {
  constructor() {
    super()
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
      <div className="input price">
        <label htmlFor="price">Price</label>
        <input type="number" min="0" name="min_price" id="min_price"/>
        <span>-</span>
        <input type="number" min="0" name="max_price" id="max_price"/>
      </div>
      <div className="input miles">
        <label htmlFor="miles">Miles</label>
        <input type="number" min="0" name="min_miles" id="min_miles"/>
        <span>-</span>
        <input type="number" min="0" name="max_miles" id="max_miles"/>
      </div>
      <div className="features">Features</div>
      <div className="checkbox sunroof">
        <label htmlFor="sunroof">Sunroof</label>
        <input type="checkbox" name="sunroof" id="sunroof"/>
      </div>
      <div className="checkbox premium-sound">
        <label htmlFor="premium_sound">Premium Sound</label>
        <input type="checkbox" name="premium_sound" id="premium_sound"/>
      </div>
      <div className="checkbox navigation">
        <label htmlFor="navigation">Navigation</label>
        <input type="checkbox" name="navigation" id="navigation"/>
      </div>
    </section>)
  }
}