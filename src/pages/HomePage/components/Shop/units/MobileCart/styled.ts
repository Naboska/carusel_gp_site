import styled from 'styled-components';
import { hexToRgba } from 'elui-react';

export const StyledMobileCartBox = styled.div`
  position: fixed;
  z-index: 11;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -4px 8px 0 ${({ theme }) => hexToRgba(theme.palette.black, 0.04)};
`;
