import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  serverTimestamp,
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';

export const fetchUserDataFirebase = async (userId) => {
  const userDocRef = doc(db, 'users', userId);
  const userData = await getDoc(userDocRef);
  return userData.exists() ? userData.data() : null;
};

export const addCorrectionRequestFirebase = async (userId, data) => {
  const userDocRef = doc(db, 'users', userId);
  const usetCollection = collection(userDocRef, 'correctionRequests');
  await addDoc(usetCollection, {
    ...data,
    createdAt: Date.now(),
  });
};

export const fetchCorrectionRequestFirebase = async (userId) => {
  const userDocRef = doc(db, 'users', userId);
  const correctionCollectionRef = collection(userDocRef, 'correctionRequests');

  // 최신순으로 정렬하여 가져오기
  const q = query(correctionCollectionRef, orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
    };
  });
};

export const deleteCorrectionRequestFirebase = async (userId, requestId) => {
  const userDocRef = doc(db, 'users', userId);
  const correctionRequestDocRef = doc(userDocRef, 'correctionRequests', requestId);
  console.log(correctionRequestDocRef);
  await deleteDoc(correctionRequestDocRef);
};

export const updateCorrectionRequestFirebase = async (userId, requestId, updatedData) => {
  const userDocRef = doc(db, 'users', userId);
  const requestDocRef = doc(collection(userDocRef, 'correctionRequests'), requestId);
  await updateDoc(requestDocRef, updatedData);
};
