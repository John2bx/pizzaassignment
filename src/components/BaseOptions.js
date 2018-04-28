import React, { Component } from 'react';
import {baseOptions} from '../pricelist'



class BaseOptions extends Component {
  render() {
    return ( <div> <h1>BASE</h1>
    <form onSubmit={this.handleSubmit} >
    <label>
      <select>

      {baseOptions.map((base)=>{return <option price={base.price} value={base.name}>{base.name}</option>})}
    </select></label></form>
    </div>
    );
  }
}

export default BaseOptions;
