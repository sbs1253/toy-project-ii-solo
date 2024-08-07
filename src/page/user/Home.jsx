import styled from 'styled-components';
import Profile from '../../component/profile';
import { useSelector } from 'react-redux';
import Calendar from '../../component/calendar/Calendar';
import { useLoading } from '../../hooks/useLoading';
import Loading from '../../component/Loading';

const Home = () => {
  const profileData = useSelector((state) => {
    return state.user.data.profileData;
  });
  const userStatus = useSelector((state) => {
    return state.user.status;
  });
  const loading = useLoading(userStatus);

  return (
    <HomeContainer>
      {loading && <Loading />}
      <Profile profileData={profileData} />
      <Calendar />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`;
