import React, { Component } from 'react';
import {sauceOptions} from '../pricelist'
import {selectSauce} from '../actions/index'
import {connect} from 'react-redux'



class SauceOptions extends Component {
  constructor(props){
    super(props);
    this.state = {
      saucename: ''}
  this.handleChange = this.handleChange.bind(this);
  // this.lookForPrice = this.lookForPrice.bind(this)
}
  // lookForPrice(Arrayofoptions, optionToSearch){Arrayofoptions.filter(base => {if (base.name === optionToSearch)return base.price})}
  handleChange(event){

    this.props.selectSauce(event.target.value)
  }
  render() {
    return ( <div> <h1>SAUCE</h1>

    <label>
      <select onChange={this.handleChange}>

      {sauceOptions.map((sauce)=>{return <option price={sauce.price} value={sauce.name}>{sauce.name}</option>})}
    </select></label>
    </div>
    );
  }
}

export default connect(null, { selectSauce })(SauceOptions)
