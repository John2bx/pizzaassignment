import React, { Component } from 'react';
import { connect } from 'react-redux'
import {priceTopping} from '../pricelist'




class ClientSelection extends Component {

  render() {
    const base = this.props.base
    const baseprice = this.props.baseprice
    const sauce = this.props.sauce
    const sauceprice = this.props.sauceprice
    const toppings = this.props.toppings

    return (
      <div>
        <p>BASE:{base}</p>
        <p>SAUCE:{sauce}</p>
        <p>TOPPINGS:{toppings.map(topping => <p>{topping}</p>)} PRICE:</p>
        <p>DEVIVERY: PRICE:</p>
        <p>TOTAL PRICE: {baseprice+sauceprice+(toppings.length*priceTopping)}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    base: state.base,
    baseprice: state.baseprice,
    sauce: state.sauce,
    sauceprice: state.sauceprice,
    toppings: state.toppings,

  }
}


export default connect(mapStateToProps)(ClientSelection)
