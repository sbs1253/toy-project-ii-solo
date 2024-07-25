import styled from 'styled-components';
import PayrollList from './List';

const Card = ({ payrollData }) => {
  return (
    <CardContainer>
      <CardTitle>
        <img
          src="https://image-resource.creatie.ai/129853559902101/129853559902103/7670a02d70b97771fd9d1947c01fb670.png"
          alt="아이콘"
          className="image"
        />
        <div>
          <h2>{payrollData.title}</h2>
          <p>{payrollData.manager}</p>
        </div>
      </CardTitle>
      <PayrollList items={payrollData.items} />
      <ActionButton>급여명세확인</ActionButton>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 80%;
  min-width: 350px;
  max-width: 600px;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid ${(props) => props.theme.colors.stroke[3]};
  border-radius: 10px;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 6.25px;
    object-fit: cover;
  }
  & h2 {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-h4);
    line-height: var(--line-height-h4);
  }
  & p {
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-caption);
    line-height: var(--line-height-caption);
    color: ${(props) => props.theme.colors.text.bodySubtle};
  }
`;

const ActionButton = styled.button`
  align-self: flex-end;
  font-size: 0.9em;
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.text.title};
  color: ${(props) => props.theme.colors.background[1]};
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
