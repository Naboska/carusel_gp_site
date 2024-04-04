import styled from 'styled-components';

export const StyledTotalItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 8px 24px;

  &:not(:last-of-type) {
    margin-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey_100};
  }
`;

export const StyledItemInfo = styled.div`
  display: flex;
  align-items: start;
  gap: 12px;
`;

export const StyledItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// noinspection SpellCheckingInspection,CssUnusedSymbol
export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  margin: 0 8px 0 auto;
  padding-left: 16px;
  gap: 4px;

  .elui-button {
    padding: 0;
    width: 30px;
  }
`;
