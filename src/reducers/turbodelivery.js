import {turboDeliveryPrice} from '../pricelist'
import {CHANGE_TURBO} from '../actions/index'



export default (state = 0, action) => {
  switch(action.type){
    case CHANGE_TURBO:{
    if (state === 0) {return state =turboDeliveryPrice}
    else {return state =0}
  }
  default: return state
}}
