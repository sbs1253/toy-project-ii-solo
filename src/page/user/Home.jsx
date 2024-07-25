import styled from 'styled-components';
import Profilebox from '../../component/profile';

const Home = () => {
  const profileData = {
    name: '송병훈',
    imageSrc:
      'https://blush.design/api/download?shareUri=W38PZslKVyKgqgVR&c=New%2520Palette%25201_0%7Effffff&bg=fcfcfc&w=800&h=800&fm=png',
    items: [
      { label: '직급', value: '팀원' },
      { label: '부서', value: 'Frontend' },
      { label: '입사일', value: '24.01.01' },
      { label: '이메일', value: 'hello@gmail.com' },
    ],
  };
  return (
    <div>
      <Profilebox profileData={profileData} />
    </div>
  );
};

export default Home;
