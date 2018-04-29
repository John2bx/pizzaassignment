
import {SELECT_SAUCE} from '../actions/index'


export default (state = [], action) => {
  switch(action.type){
    case SELECT_SAUCE:{
    return state = action.payload
  }
  default: return state
}}
