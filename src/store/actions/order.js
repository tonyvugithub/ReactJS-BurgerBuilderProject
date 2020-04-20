import * as actionTypes from "./actionTypes";
import axiosInstance from "../../axios-orders";

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
  return (dispatch) => {
    dispatch(orderBurgerStart());
    axiosInstance
      .post(`/orders.json?auth=${token}`, orderData)
      .then((res) => {
        dispatch(orderBurgerSuccess(res.data, orderData));
      })
      .catch((err) => {
        dispatch(orderBurgerFail(err));
      });
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
  return dispatch => {
    dispatch(fetchOrdersStart());
    //orderBy="userId" and equalTo= "..." the field that order by need to be in ""
    axiosInstance
      .get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
