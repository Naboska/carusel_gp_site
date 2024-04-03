import styled from 'styled-components';

import { HEADER_HEIGHT } from './units';

const TOTAL_WIDTH = 400;

export const StyledShop = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  margin: 24px;
  width: calc(100% - ${TOTAL_WIDTH}px - (24px * 2));
`;

export const StyledTotalBox = styled.div`
  position: fixed;
  top: ${HEADER_HEIGHT}px;
  right: 0;
  width: ${TOTAL_WIDTH}px;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  padding: 24px 24px 0;
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
