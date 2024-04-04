import styled from 'styled-components';
import { hexToRgba } from 'elui-react';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 4px 8px 0 ${({ theme }) => hexToRgba(theme.palette.black, 0.04)};
`;

export const StyledCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 24px;
`;
