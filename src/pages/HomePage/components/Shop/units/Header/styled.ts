import styled from 'styled-components';
import { Input, tabletMedia } from 'elui-react';

import { HEADER_HEIGHT } from './constants';

export const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  top: 0;
  height: ${HEADER_HEIGHT}px;
  padding: 24px;
  z-index: 2;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.palette.grey_200};
`;

export const StyledLogo = styled.img`
  width: 66px;
  height: 53px;
  margin: -9px 24px -9px 0;
  cursor: pointer;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  max-width: 230px;
  padding-bottom: 0;

  @media (${tabletMedia}) {
    max-width: 370px;
  }
`;
