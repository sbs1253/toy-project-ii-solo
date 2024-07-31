import { createSlice } from '@reduxjs/toolkit';
import { fetchLoginThunk, addCorrectionRequestThunk, deleteCorrectionRequestThunk } from './userThunks';

let initialState = {
  data: {},
  status: '',
  isLogin: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.data = {};
      state.status = '';
      state.isLogin = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoginThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLogin = true;
        state.data = action.payload;
      })
      .addCase(fetchLoginThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addCorrectionRequestThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCorrectionRequestThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.correctionRequests = action.payload;
      })
      .addCase(addCorrectionRequestThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteCorrectionRequestThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCorrectionRequestThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.correctionRequests = action.payload;
      })
      .addCase(deleteCorrectionRequestThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
