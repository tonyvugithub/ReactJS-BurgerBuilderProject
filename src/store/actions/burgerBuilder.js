import * as actionTypes from "./actionTypes";

export const increaseIngredient = (ingredientName) => {
  return {
    type: actionTypes.INCREASE_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const decreaseIngredient = (ingredientName) => {
  return {
    type: actionTypes.DECREASE_INCREDIENT,
    ingredientName: ingredientName,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

//DEBUG tmr
export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS
  }
};
