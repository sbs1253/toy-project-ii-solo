import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer/reducer';
import { configureStore } from '@reduxjs/toolkit';
// let store = createStore(reducer);
// console.log(store.getState());

let store = configureStore({
  reducer: reducer,
});
export default store;
