import React, { Component } from 'react';
import {toppings} from '../pricelist'
import {selectToppingOne, removeToppings} from '../actions/index'
import {connect} from 'react-redux'



class Toppings extends Component {
  constructor(props){
    super(props);

  this.handleChangeOne = this.handleChangeOne.bind(this);
  this.handleclick = this.handleclick.bind(this);


}

  handleChangeOne(event){



    this.props.selectToppingOne(event.target.value)
    // this.props.removeToppings()
    }

    handleclick(event){
      event.preventDefault()


      this.props.removeToppings()
    }







  render() {




    return ( <div> <h1>TOPPINGS</h1>

    <label>
      <select value={this.toppingOne} onClick={this.handleChangeOne}>
      <option price='0.50' key='notopping'>NO TOPPING</option>
      {toppings.map((topping)=>{return <option price='0.50' key={topping}>{topping}</option>})}
    </select></label>


    <button className="TurbodroneButton" onClick={this.handleclick}>X</button>



    </div>
      );
  }
}

export default connect(null, {selectToppingOne, removeToppings})(Toppings)
