import styled from 'styled-components';
import { desktopMedia, laptopMedia, tabletMedia } from 'elui-react';

import { HEADER_HEIGHT } from './units';

const TOTAL_WIDTH = 400;

export const StyledTabs = styled.div`
  position: sticky;
  width: 100%;
  top: ${HEADER_HEIGHT}px;
  padding: 0 16px;
  z-index: 1;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.palette.grey_200};

  @media (${tabletMedia}) {
    width: calc(100% - ${TOTAL_WIDTH}px - 1px);
    padding: 0 24px;
  }
`;

export const StyledShop = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  padding: 16px 16px 76px;
  width: 100%;

  @media (${tabletMedia}) {
    gap: 24px;
    padding: 24px;
    width: calc(100% - ${TOTAL_WIDTH}px);
  }
`;

export const StyledCartBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  z-index: 2;
  width: ${TOTAL_WIDTH}px;
  height: 100%;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: -1px 0 0 0 ${({ theme }) => theme.palette.grey_200};
`;

export const StyledShopGroup = styled.ul`
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledShopGroupItem = styled.li`
  margin-bottom: 40px;
`;

export const StyledShopItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (${tabletMedia}) {
    grid-gap: 24px;
  }

  @media (${laptopMedia}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (${desktopMedia}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
