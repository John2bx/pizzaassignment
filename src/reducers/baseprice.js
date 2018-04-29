import {toppings, baseOptions, sauceOptions} from '../pricelist'
import {SELECT_BASE} from '../actions/index'


export default (state = 0, action) => {
  switch(action.type){
    case SELECT_BASE:{
    const searchedbase = baseOptions.filter(base =>{ return base.name === action.payload})
    console.log(searchedbase[0].price)
    return state = searchedbase[0].price

  }
  default: return state
}}
