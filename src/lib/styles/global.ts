import { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({ theme }) => theme.palette.grey_200};
  }

  a {
    text-decoration: none;
  }
`;
