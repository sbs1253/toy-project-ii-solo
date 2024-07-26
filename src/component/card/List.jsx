import styled from 'styled-components';

const List = ({ items }) => {
  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem key={index}>
          <Label>{item.label}</Label>
          <Value>{item.value}</Value>
        </ListItem>
      ))}
    </ListContainer>
  );
};
export default List;

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  width: 100%;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Label = styled.span`
  color: ${(props) => props.theme.colors.text.body};
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-caption);
  line-height: var(--line-height-caption);
`;

const Value = styled.span`
  color: ${(props) => props.theme.colors.text.bodySubtle};
  font-size: var(--font-size-body-regular);
  font-weight: var(--font-weight-body-regular);
  line-height: var(--line-height-body-regular);
`;
