import styled from 'styled-components';
import Profile from '../../component/profile';
import Card from '../../component/card';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import CorrectionRequestModal from '../../component/modal';
import { Button } from 'antd';
import { addCorrectionRequest } from '../../redux/reducer/userThunks';
import { SmallButton } from '../../component/Button.styles';
const PayrollDetails = () => {
  const profileData = useSelector((state) => state.user.data.profileData);
  const payrollData = useSelector((state) => state.user.data.payrollData);

  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleSubmit = (values) => {
    const newRequest = {
      title: values.title,
      manager: '담당자: 송병훈', // 이 부분은 실제 로직에 맞게 조정하세요
      items: [
        { label: '날짜', value: values.date.format('YY.MM.DD') },
        { label: '내용', value: values.content },
        { label: '비고', value: values.note || '' },
        { label: '상태', value: '처리중' },
      ],
    };
    console.log(newRequest);
    dispatch(addCorrectionRequest(newRequest));
    setModalVisible(false);
  };

  return (
    <PayrollContainer>
      <CorrectionRequestModal visible={modalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />
      <Profile profileData={profileData} />
      <PayrollBox>
        <PayrollTitle>급여 명세</PayrollTitle>
        <RequestButton onClick={showModal}>정정신청하기</RequestButton>
        {payrollData.map((data) => (
          <Card data={data} text={'급여 명세 확인'} />
        ))}
      </PayrollBox>
    </PayrollContainer>
  );
};

export default PayrollDetails;

const PayrollContainer = styled.div`
  min-width: 350px;
  max-height: calc(100% - 40px);
  overflow-y: scroll;
`;

const PayrollBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  max-width: 800px;
  margin: 0 auto;
`;

const PayrollTitle = styled.h1`
  margin-top: 20px;
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-h3);
  line-height: var(--line-height-h3);
`;

const RequestButton = styled(SmallButton)`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: ${(props) => props.theme.colors.primary.normal};
`;
