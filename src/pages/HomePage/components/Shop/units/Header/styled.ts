import styled from 'styled-components';

import { HEADER_HEIGHT } from './constants';

export const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  top: 0;
  height: ${HEADER_HEIGHT}px;
  padding: 24px;
  z-index: 1;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.palette.grey_200};
`;

export const StyledLogo = styled.img`
  width: 66px;
  height: 53px;
  margin: -9px 24px -9px 0;
`;
