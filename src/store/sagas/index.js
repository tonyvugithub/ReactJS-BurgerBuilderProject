import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authenticateSaga,
  checkAuthTokenAvailableSaga,
} from "./authenticate";

import { initIngredientsSaga } from './burgerBuilder';

import { orderBurgerSaga, fetchOrdersSaga } from './order';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_INITIATE, authenticateSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TOKEN, checkAuthTokenAvailableSaga);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
  yield takeEvery(actionTypes.ORDER_BURGER, orderBurgerSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
