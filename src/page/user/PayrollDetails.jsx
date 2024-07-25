import styled from 'styled-components';
import Profilebox from '../../component/profile';
import PayrollCard from '../../component/card';
const PayrollDetails = () => {
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

  const payrollData = {
    title: '6월 급여 명세서',
    manager: '담당자: 송병훈',
    items: [
      { label: '급여일', value: '24.07.01' },
      { label: '지급 총액', value: '5,000,000' },
      { label: '실지급액', value: '4,000,000' },
    ],
  };
  return (
    <PayrollContainer>
      <Profilebox profileData={profileData} />
      <PayrollBox>
        <PayrollTitle>급여 명세</PayrollTitle>
        <PayrollCard payrollData={payrollData} />
        <PayrollCard payrollData={payrollData} />
        <PayrollCard payrollData={payrollData} />
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
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
`;

const PayrollTitle = styled.h1`
  margin-top: 20px;
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-h3);
  line-height: var(--line-height-h3);
`;
