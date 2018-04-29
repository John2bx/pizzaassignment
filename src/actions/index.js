const selectBase = (base) => {
  console.log(base)
  return {
    type: "SELECT_BASE",
    payload: base
  }
}

const selectSauce = (sauce) => {
  console.log(sauce)
  return {
    type: "SELECT_SAUCE",
    payload: sauce
  }
}

const selectToppingOne = (topping) => {
  console.log(topping)
  return {
    type: "SELECT_TOPPINGONE",
    payload: topping
  }
}
const removeToppings = () => {

  return {
    type: "REMOVE_TOPPINGS",

  }
}





const SELECT_BASE = 'SELECT_BASE'
const SELECT_SAUCE = 'SELECT_SAUCE'
const SELECT_TOPPINGONE = 'SELECT_TOPPINGONE'
const REMOVE_TOPPINGS = 'REMOVE_TOPPINGS'

export {selectBase, selectSauce, removeToppings, selectToppingOne, SELECT_BASE, SELECT_SAUCE, SELECT_TOPPINGONE, REMOVE_TOPPINGS}
