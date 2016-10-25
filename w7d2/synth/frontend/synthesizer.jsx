import React from 'react';
import ReactDOM from 'react-dom';

import Note from './util/note.js';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  // store.dispatch = addLoggingToDispatch(store);
  // const newStore = applyMiddlewares(store, addLoggingToDispatch);
  ReactDOM.render(<Root store={store} />, rootEl);
});

// const addLoggingToDispatch = store => {
//   let localDispatch = store.dispatch;
//   return ( action => {
//     console.log(store.getState());
//     console.log(action);
//     localDispatch(action);
//     console.log(store.getState());
//   });
// };

// What Redux's applyMiddleware is doing
const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};
