import Profile from '../../component/profile';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Card from '../../component/card';
import { useDispatch } from 'react-redux';
import { deleteCorrectionRequestThunk } from '../../redux/reducer/userThunks';

const CorrectionRequestRecords = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => {
    return state.user.data.profileData;
  });
  const correctionRequests = useSelector((state) => state.user.data.correctionRequests);

  console.log(correctionRequests);
  const onCardClick = (id) => {
    console.log(id);
    dispatch(deleteCorrectionRequestThunk(id));
  };

  const iconSrc =
    'https://image-resource.creatie.ai/129853559902101/129853559902103/d52a3cab2e07adcfb4a3fc44f581abd0.png';

  return (
    <CorrectionContainer>
      <Profile profileData={profileData} />
      <CorrectionBox>
        <CorrectTitle>정정내역</CorrectTitle>

        {correctionRequests?.map((data) => (
          <Card key={data.id} data={data} text={'취소'} src={iconSrc} onCardClick={() => onCardClick(data.id)} />
        ))}
      </CorrectionBox>
    </CorrectionContainer>
  );
};

export default CorrectionRequestRecords;

const CorrectionContainer = styled.div`
  min-width: 350px;
  max-height: calc(100% - 40px);
  overflow-y: auto;
`;

const CorrectionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;
const CorrectTitle = styled.h1`
  margin-top: 20px;
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-h3);
  line-height: var(--line-height-h3);
`;
