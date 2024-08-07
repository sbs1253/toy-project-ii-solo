import { createSlice } from '@reduxjs/toolkit';
import {
  fetchLoginThunk,
  addCorrectionRequestThunk,
  deleteCorrectionRequestThunk,
  addTaskThunk,
  deleteTaskThunk,
  updateTaskThunk,
} from './userThunks';

let initialState = {
  data: {},
  status: '',
  isLogin: false,
  error: null,
  showSuccessBox: false,
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
      state.showSuccessBox = false;
    },
    setShowSuccessBox: (state, action) => {
      state.showSuccessBox = action.payload;
    },
    setShowErrorBox: (state, action) => {
      state.error = action.payload;
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
        console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(addCorrectionRequestThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCorrectionRequestThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.correctionRequests = action.payload;
        state.showSuccessBox = true;
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
        state.showSuccessBox = true;
      })
      .addCase(deleteCorrectionRequestThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addTaskThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTaskThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.tasks = action.payload;
      })
      .addCase(addTaskThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteTaskThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.tasks = action.payload;
      })
      .addCase(deleteTaskThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateTaskThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTaskThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.tasks = action.payload;
      })
      .addCase(updateTaskThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
export const { clearUser, setShowSuccessBox, setShowErrorBox } = userSlice.actions;
export default userSlice.reducer;
