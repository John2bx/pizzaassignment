import React, { Component } from 'react';
import BaseOptions from './BaseOptions'
import SauceOptions from './SauceOptions'
import Toppings from './Toppings'



export default class Pizzaconfigurator extends Component {
  handleSubmit(event) {
   alert('An essay was submitted: ' + this.state.value);
   event.preventDefault();
 }

  render() {
    return (

  <div>
  <form onSubmit={this.handleSubmit}>
  <BaseOptions />
  <SauceOptions />
  <Toppings />



<input type='submit' value='Submit'/>
  </form>


</div>
    );
  }
}
