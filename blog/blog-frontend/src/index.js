import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './modules/index';
import rootReducer from './modules/index';
import { tempSetUser } from './modules/user';
import { check } from './modules/user';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);


function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return; // 로그인 상태가 아니라면 아무것도 안함

    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}







sagaMiddleware.run(rootSaga);
loadUser();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
