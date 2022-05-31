import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import auth from "./auth";
import { authSaga } from "./auth";
import loading from "./loading";
import user from "./user";
import { userSaga } from "./user";

const rootReducer = combineReducers({
    auth,loading,user,
  });
  
  export function* rootSaga() {
    yield all([authSaga(), userSaga()]);
  }
  export default rootReducer;