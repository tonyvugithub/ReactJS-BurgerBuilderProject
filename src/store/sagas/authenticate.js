import { put, delay } from "redux-saga/effects";
import axios from "axios";
//import * as actionTypes from '../actions/actionTypes';

import * as actions from "../actions/index";

//Generator function
export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("userId");
  yield put(actions.logoutProceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logoutProceed());
}

export function* authenticateSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  const APIkey = "AIzaSyCdd4WQBRs7jVm8ZHLIc4wkxN-or4uYa2o";
  const requestURL =
    (action.isInSignupMode
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
      : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=") +
    APIkey;
  try {
    const response = yield axios.post(requestURL, authData);

    const expirationDate = new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );

    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("userId", response.data.localId);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authFail(error.response.data.error));
  }
}

export function* checkAuthTokenAvailableSaga(action) {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(localStorage.getItem("expirationDate"));
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const userId = yield localStorage.getItem("userId");
      yield put(actions.authSuccess(token, userId));
      yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    }
  }
}
