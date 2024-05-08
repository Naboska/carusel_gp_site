import styled from 'styled-components';
import { BUTTON_CN, Button, Typography, hexToRgba, tabletMedia } from 'elui-react';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 4px 8px 0 ${({ theme }) => hexToRgba(theme.palette.black, 0.04)};

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 12px;
  }

  @media (${tabletMedia}) {
    padding: 32px 16px;

    img {
      width: 192px;
      height: 192px;
      margin-bottom: 0;
    }
  }
`;

export const StyledCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 12px;

  .${BUTTON_CN} {
    padding: 4px 8px;
  }

  @media (${tabletMedia}) {
    margin-top: 24px;

    .${BUTTON_CN} {
      padding: 8px 12px;
    }
  }
`;

export const StyledAddToCartButton = styled(Button)`
  margin-top: 12px;
  padding: 4px 6px;

  @media (${tabletMedia}) {
    padding: 8px 12px;
    margin-top: 24px;
  }
`;

export const StyledCardTypography = styled(Typography)`
  display: block;
  text-align: center;
  font-size: 14px;

  @media (${tabletMedia}) {
    font-size: 20px;
  }
`;

export const StyledTitle = styled(StyledCardTypography)`
  min-height: 57px;
  line-height: 18px;

  @media (${tabletMedia}) {
    min-height: 56px;
    line-height: 28px;
  }
`;
