import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin, addCorrectionRequest, deleteCorrectionRequestThunk } from './userThunks';

let initialState = {
  data: null,
  status: '',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addCorrectionRequest.fulfilled, (state, action) => {
        state.data.correctionRequests = action.payload;
      })
      .addCase(deleteCorrectionRequestThunk.fulfilled, (state, action) => {
        state.data.correctionRequests = action.payload;
      });
  },
});

export default userSlice.reducer;
