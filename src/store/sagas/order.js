import { put } from "redux-saga/effects";
import axios from "../../axios-orders";

import * as actions from "../actions/index";

export function* orderBurgerSaga(action) {
  yield put(actions.orderBurgerStart());
  try {
    const response = yield axios.post(
      `/orders.json?auth=${action.token}`,
      action.orderData
    );
    yield put(actions.orderBurgerSuccess(response.data, action.orderData));
  } catch (err) {
    yield put(actions.orderBurgerFail(err));
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersStart());
  //orderBy="userId" and equalTo= "..." the field that order by need to be in ""
  try {
    const response = yield axios.get(
      `/orders.json?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`
    );
    const fetchedOrders = yield [];
    for (let key in response.data) {
      yield fetchedOrders.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrders));
  } catch (err) {
    yield put(actions.fetchOrdersFail(err));
  }
}
