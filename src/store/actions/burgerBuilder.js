import * as actionTypes from './actionTypes';
import axiosInstance from "../../axios-orders";

export const increaseIngredient=(ingredientName) => {
  return {
    type: actionTypes.INCREASE_INGREDIENT,
    ingredientName: ingredientName
  }
};

export const decreaseIngredient=(ingredientName) => {
  return {
    type: actionTypes.DECREASE_INCREDIENT,
    ingredientName: ingredientName
  }
};

export const setIngredients = (ingredients) =>{
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  }
}

export const fetchIngredientFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  }
}

export const initIngredients = () => {
  return dispatch => {
    axiosInstance
    .get("https://react-burger-builder-a2dd3.firebaseio.com/ingredients.json")
    .then(res => {
      dispatch(setIngredients(res.data));
    })
    .catch(err => dispatch(fetchIngredientFailed()));
  }
}