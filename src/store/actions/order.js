import * as actionTypes from "./actionTypes";

export const orderBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.ORDER_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const orderBurgerFail = (error) => {
  return {
    type: actionTypes.ORDER_BURGER_FAIL,
    error: error,
  };
};

export const orderBurgerStart = () => {
  return {
    type: actionTypes.ORDER_BURGER_START,
  };
};

export const orderBurger = (orderData, token) => {
  return {
    type: actionTypes.ORDER_BURGER,
    orderData: orderData,
    token: token
  };
};

export const orderInit = () => {
  return {
    type: actionTypes.ORDER_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: actionTypes.FETCH_ORDERS,
    token: token,
    userId: userId
  };
};
