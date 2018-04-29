import {toppings, baseOptions, sauceOptions} from '../pricelist'
import {SELECT_SAUCE} from '../actions/index'


export default (state = 0, action) => {
  switch(action.type){
    case SELECT_SAUCE:{
    const searchedbase = sauceOptions.filter(sauce =>{ return sauce.name === action.payload})
    console.log(searchedbase[0].price)
    return state = searchedbase[0].price

  }
  default: return state
}}
