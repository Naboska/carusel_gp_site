import styled from 'styled-components';

import { HEADER_HEIGHT } from './units';

const TOTAL_WIDTH = 400;

export const StyledTabs = styled.div`
  position: sticky;
  top: ${HEADER_HEIGHT}px;
  width: calc(100% - ${TOTAL_WIDTH}px - 1px);
  padding: 0 24px;
  z-index: 1;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.palette.grey_200};
`;

export const StyledShop = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  margin: 24px;
  width: calc(100% - ${TOTAL_WIDTH}px - (24px * 2));
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
