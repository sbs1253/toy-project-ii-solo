import styled from 'styled-components';
const Table = ({ key, label, value }) => {
  return (
    <TableListItem key={key}>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </TableListItem>
  );
};

export default Table;

const TableListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Label = styled.span`
  color: ${(props) => props.theme.colors.text.body};
  font-size: var(--font-size-caption);
`;
const Value = styled.span`
  color: ${(props) => props.theme.colors.text.bodySubtle};
  font-size: var(--font-size-body-regular);
  font-weight: var(--font-weight-body-regular);
  line-height: var(--line-height-body-regular);
`;
