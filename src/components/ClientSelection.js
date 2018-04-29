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
    const turbodelivery = this.props.turbodelivery
    const totalprice = baseprice+sauceprice+(toppings.length*priceTopping)
    const pricetopay = totalprice+(totalprice*turbodelivery)

    return (
      <div className="pizzaSelection">
        <p>BASE:</p><p>{base}</p>
        <p>SAUCE:</p><p>{sauce}</p>
        <p>TOPPINGS:</p>{toppings.map(topping => <p>{topping}</p>)}

        <p>TOTAL PRICE: {pricetopay}</p>
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
    turbodelivery: state.turbodelivery

  }
}


export default connect(mapStateToProps)(ClientSelection)
