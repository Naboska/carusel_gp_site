import styled from 'styled-components';
import { BUTTON_CN, scrollBarMixin, tabletMedia } from 'elui-react';

import { HEADER_HEIGHT } from '../Header';

export const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1;

  ${scrollBarMixin};
`;

export const StyledHeader = styled.div`
  display: none;

  @media (${tabletMedia}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${HEADER_HEIGHT}px;
    z-index: 1;
    padding: 14px 4px 14px 24px;
    box-shadow: 0 1px 0 0 ${({ theme }) => theme.palette.grey_200};
  }
`;

export const StyledFooterBox = styled.div`
  display: flex;
  flex-direction: column;

  .${BUTTON_CN} {
    margin: 0 16px 16px;
  }

  @media (${tabletMedia}) {
    .${BUTTON_CN} {
      margin: 0 24px 24px;
    }
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-shadow: 0 -1px 0 0 ${({ theme }) => theme.palette.grey_200};

  @media (${tabletMedia}) {
    padding: 24px;
  }
`;
