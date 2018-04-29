import React, { Component } from 'react';
import BaseOptions from './BaseOptions'
import SauceOptions from './SauceOptions'
import Toppings from './Toppings'
import ClientSelection from './ClientSelection'
import { connect } from 'react-redux'
import {changeTurboDelivery} from '../actions/index'
import '../App.css'



class Pizzaconfigurator extends Component {
  constructor(props){
    super(props);
    this.state = {'order': false,}

   this.handleclick = this.handleclick.bind(this)
   this.handleChange = this.handleChange.bind(this)
}

handleclick(event){
  event.preventDefault()
  this.setState({'order':true})
  console.log(this.props.base)

}
handleChange(event){
 this.props.changeTurboDelivery()
}


  render() { if (this.state.order === false){
    return (

  <div className = "PizzaPage">
  <form className = "AllForms" onSubmit={this.handleSubmit}>
  <BaseOptions />
  <SauceOptions />
  <Toppings />
  <ClientSelection />
  <label className="Turbodrone">Turbodrone Delivery!</label>
  <input onClick={this.handleChange} id="checkBox" type="checkbox"/><br/>
  <button className="TurbodroneButton" onClick={this.handleclick}>PLACE ORDER</button>



  </form>


</div>
    );
  }
else{return <h1>YOUR ORDER HAS BEEN PLACED!</h1>}}
}



export default connect(null, {changeTurboDelivery})(Pizzaconfigurator)
