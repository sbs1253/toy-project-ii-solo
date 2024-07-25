import styled from 'styled-components';
import Profilebox from '../../component/profile';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileData);
  // console.log('profileData', profileData);
  const profile = {
    name: '김철수',
    imageSrc:
      'https://blush.design/api/download?shareUri=533J8qVI3zxeielR&c=New%2520Palette%25201_0%7Effffff&bg=fcfcfc&w=800&h=800&fm=png',
    items: [
      { label: '직급', value: '인턴' },
      { label: '부서', value: 'Frontend' },
      { label: '입사일', value: '24.07.01' },
      { label: '이메일', value: 'abcde@gmail.com' },
    ],
  };
  const updateProfile = () => {
    dispatch({ type: 'SET_PROFILE_DATA', payload: profile });
  };
  return (
    <div>
      <Profilebox profileData={profileData} />
      <button onClick={updateProfile}>프로필 업데이트</button>
    </div>
  );
};

export default Home;
