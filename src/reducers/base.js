
import {SELECT_BASE} from '../actions/index'


export default (state = [], action) => {
  switch(action.type){
    case SELECT_BASE:{
    return state = action.payload
  }
  default: return state
}}
