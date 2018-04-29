import React, { Component } from 'react';
import {baseOptions} from '../pricelist'
import {selectBase} from '../actions/index'
import {connect} from 'react-redux'




class BaseOptions extends Component {
  constructor(props){
    super(props);
    this.state = {
      basename: ''}
  this.handleChange = this.handleChange.bind(this);
  // this.lookForPrice = this.lookForPrice.bind(this)
}
  // lookForPrice(Arrayofoptions, optionToSearch){Arrayofoptions.filter(base => {if (base.name === optionToSearch)return base.price})}
  handleChange(event){



    // this.setState({basename: event.target.value},
    this.props.selectBase(event.target.value)




  }


  render() {
    return ( <div> <h1>BASE</h1>

    <label>
      <select onChange={this.handleChange}>

      {baseOptions.map((base)=>{return <option value={base.name} key={base.name}>{base.name}</option>})}
    </select></label>
    </div>
    );
  }
}

export default connect(null, { selectBase })(BaseOptions)
