import styled from 'styled-components';
import Profile from '../../component/profile';
import { useDispatch, useSelector } from 'react-redux';
// import { setProfileData } from '../../redux/reducer/reducer';
const Home = () => {
  const profileData = useSelector((state) => {
    return state.user.data.profileData;
  });

  // const updateProfile = () => {
  //   dispatch(setProfileData(profile));
  // };
  return (
    <div>
      <Profile profileData={profileData} />
    </div>
  );
};

export default Home;
