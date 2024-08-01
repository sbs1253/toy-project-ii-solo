// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   addCorrectionRequestFirebase,
//   fetchCorrectionRequestFirebase,
//   deleteCorrectionRequestFirebase,
// } from './correctionRequestApi';

// export const addCorrectionRequestThunk = createAsyncThunk(
//   'user/addCorrectionRequest',
//   async (data, { getState, rejectWithValue }) => {
//     const { user } = getState();
//     try {
//       // 파이어 베이스에서 정정 신청 추가하기
//       await addCorrectionRequestFirebase(user.data.uid, data);
//       // 정정 신청 데이터 가져오기
//       return await fetchCorrectionRequestFirebase(user.data.uid);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteCorrectionRequestThunk = createAsyncThunk(
//   'user/deleteCorrectionRequest',
//   async (id, { getState, rejectWithValue }) => {
//     const { user } = getState();
//     try {
//       // 파이어 베이스에서 해당 정정 신청 삭제하기
//       await deleteCorrectionRequestFirebase(user.data.uid, id);
//       // 정정 신청 데이터 가져오기
//       return await fetchCorrectionRequestFirebase(user.data.uid);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
