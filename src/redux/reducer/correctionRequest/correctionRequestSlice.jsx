// import { createSlice } from '@reduxjs/toolkit';
// import { addCorrectionRequestThunk, deleteCorrectionRequestThunk } from './correctionRequestThunks';

// let initialState = {
//   data: [],
//   status: '',
//   error: null,
// };

// const correctionRequestSlice = createSlice({
//   name: 'correctionRequest',
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(addCorrectionRequestThunk.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(addCorrectionRequestThunk.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(addCorrectionRequestThunk.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       .addCase(deleteCorrectionRequestThunk.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(deleteCorrectionRequestThunk.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(deleteCorrectionRequestThunk.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default correctionRequestSlice.reducer;
