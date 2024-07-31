import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  fetchUserDataFirebase,
  addCorrectionRequestFirebase,
  fetchCorrectionRequestFirebase,
  deleteCorrectionRequestFirebase,
} from './userApi';
import app from '../../firebase';

export const fetchLoginThunk = createAsyncThunk('user/fetchLogin', async ({ email, password }, { rejectWithValue }) => {
  const auth = getAuth(app);
  try {
    // 파이어베이스에 로그인인증 받기
    const userAuth = await signInWithEmailAndPassword(auth, email, password);

    // 로그인한 유저 데이터 가져오기
    const userData = await fetchUserDataFirebase(userAuth.user.uid);

    // 정정 신청 데이터 가져오기
    const correctionRequests = await fetchCorrectionRequestFirebase(userAuth.user.uid);
    return { ...userData, uid: userAuth.user.uid, correctionRequests };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addCorrectionRequestThunk = createAsyncThunk(
  'user/addCorrectionRequest',
  async (data, { getState, rejectWithValue }) => {
    // getState로 현재 State 데이터 가져오기
    const { user } = getState();
    try {
      // 파이어 베이스에서 정정 신청 추가하기
      await addCorrectionRequestFirebase(user.data.uid, data);

      // 정정 신청 데이터 가져오기
      return await fetchCorrectionRequestFirebase(user.data.uid);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCorrectionRequestThunk = createAsyncThunk(
  'user/deleteCorrectionRequest',
  async (id, { getState, rejectWithValue }) => {
    const { user } = getState();
    try {
      // 파이어 베이스에서 해당 정정 신청 삭제하기
      await deleteCorrectionRequestFirebase(user.data.uid, id);

      // 정정 신청 데이터 가져오기
      await deleteCorrectionRequestFirebase(user.data.uid, id);
      return await fetchCorrectionRequestFirebase(user.data.uid);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
