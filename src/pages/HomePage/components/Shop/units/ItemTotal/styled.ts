import styled from 'styled-components';

const FOOTER_HEIGHT = 56;

export const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100% - ${FOOTER_HEIGHT}px);
  height: 100%;
`;

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  min-height: ${FOOTER_HEIGHT}px;
  box-shadow: 0 -1px 0 0 ${({ theme }) => theme.palette.grey_200};
`;
