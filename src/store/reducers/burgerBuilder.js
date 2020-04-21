import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const increaseIngreditent = (state,action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(
    state.ingredients,
    updatedIngredient
  );
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
}

const decreaseIngredient = (state,action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngredients = updateObject(
    state.ingredients,
    updatedIngredient
  );
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
}

const setIngredients = (state,action) => {
  return updateObject(state,{
    ingredients: {
      salad: action.ingredients.salad,
      cheese: action.ingredients.cheese,
      bacon: action.ingredients.bacon,
      meat: action.ingredients.meat,
    },
    //When you initially set the ingredients on root page, the totalPrice need to be updated to the initial state of 4$
    totalPrice: 4,
    error: false,
    building: false
  })
}

const fetchIngredientsFailed = (state,action) => {
  return updateObject(state,{error: true});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_INGREDIENT:
      return increaseIngreditent(state,action);
    case actionTypes.DECREASE_INCREDIENT:
      return decreaseIngredient(state,action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state,action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state,action);
    default:
      return state;
  }
};

export default reducer;
