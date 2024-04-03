import styled from 'styled-components';

export const StyledTotalItem = styled.div`
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey_200};
  }
`;

// noinspection SpellCheckingInspection,CssUnusedSymbol
export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-left: 4px;
  gap: 4px;

  .elui-button {
    padding: 0;
    width: 30px;
  }
`;
