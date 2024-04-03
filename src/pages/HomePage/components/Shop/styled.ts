import styled from 'styled-components';

export const StyledShop = styled.div`
  position: relative;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 200px;
`;

export const StyledTotalBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 24px;
  padding: 10px;
  background-color: #e1e1e1;
`;

export const StyledShopGroup = styled.ul`
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledShopGroupItem = styled.li`
  border-bottom: 1px solid;
`;

export const StyledShopItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
