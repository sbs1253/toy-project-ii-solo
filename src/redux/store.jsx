import userSlice from './reducer/userSlice';
import { configureStore } from '@reduxjs/toolkit';

let store = configureStore({
  reducer: { user: userSlice },
});
export default store;
