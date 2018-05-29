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
    this.state = {'order': 'pending',}

   this.handleclick = this.handleclick.bind(this)
   this.handleChange = this.handleChange.bind(this)
}

handleclick(event){
  event.preventDefault()
  if(this.props.base[0] && this.props.sauce[0] && this.props.toppings[0]){return this.setState({'order': 'placed'})}
  else {this.setState({'order':'wrong'})}
  // if(!this.props.sauce){return null}
  // if(!this.props.toppings){return null}
  //
  // this.setState({'order':true})


}
handleChange(event){
 this.props.changeTurboDelivery()
}


  render() { if (this.state.order === 'pending' || this.state.order === 'wrong'){
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
else if (this.state.order){return <h1>YOUR ORDER HAS BEEN PLACED!</h1>}}
}

const mapStateToProps = (state) => {
  return {
    base: state.base,
    baseprice: state.baseprice,
    sauce: state.sauce,
    sauceprice: state.sauceprice,
    toppings: state.toppings,
    turbodelivery: state.turbodelivery

  }
}

export default connect(mapStateToProps, {changeTurboDelivery})(Pizzaconfigurator)
