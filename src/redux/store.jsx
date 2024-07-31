import userSlice from './reducer/userSlice';
import { configureStore } from '@reduxjs/toolkit';

let store = configureStore({
  reducer: { user: userSlice },
});
store.subscribe(() => console.log(store.getState()));
export default store;
