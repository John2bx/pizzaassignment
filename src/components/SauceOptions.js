import React, { Component } from 'react';
import {sauceOptions} from '../pricelist'



class SauceOptions extends Component {
  render() {
    return ( <div> <h1>SAUCE</h1>
    <form onSubmit={this.handleSubmit} >
    <label>
      <select>

      {sauceOptions.map((sauce)=>{return <option price={sauce.price} value={sauce.name}>{sauce.name}</option>})}
    </select></label></form>
    </div>
    );
  }
}

export default SauceOptions;
