import React, { Component } from 'react';
import BaseOptions from './BaseOptions'
import SauceOptions from './SauceOptions'



export default class Pizzaconfigurator extends Component {
  render() {
    return (

  <div>
  <BaseOptions />
  <SauceOptions />
  <h1>SAUCE</h1>
  <form onSubmit={this.handleSubmit} >
  <label>
    <select>
    <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option selected value="coconut">Coconut</option>
    <option value="mango">Mango</option>
  </select></label></form>
  <h1>TOPPINGS</h1>
  <form onSubmit={this.handleSubmit}>
  <label>
    <select>
    <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option selected value="coconut">Coconut</option>
    <option value="mango">Mango</option>
  </select></label></form>
  <form onSubmit={this.handleSubmit}>
  <label>
    <select>
    <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option selected value="coconut">Coconut</option>
    <option value="mango">Mango</option>
  </select></label></form>
  <form onSubmit={this.handleSubmit}>
  <label>
    <select>
    <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option selected value="coconut">Coconut</option>
    <option value="mango">Mango</option>
  </select></label>

  <input type ='submit' value='Submit'/>
  </form>


</div>
    );
  }
}
