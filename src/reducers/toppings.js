import {toppings, } from '../pricelist'
import {SELECT_TOPPINGONE, REMOVE_TOPPINGS} from '../actions/index'

const initialState = []

export default (state = initialState, action) => {
  switch(action.type){
    case SELECT_TOPPINGONE:{
    if (toppings.includes(action.payload) && state.length <= 2)
    {return state = state.concat(action.payload)}
    else {return state}
  }
  case REMOVE_TOPPINGS:{

  return state = initialState

}
  default: return state
}}
