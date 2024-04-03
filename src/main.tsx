import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, theme } from 'elui-react';

import 'normalize.css/normalize.css';

import { HomePage } from 'pages/HomePage';
import { queryClient } from 'services';
import { StyledGlobal } from 'lib/styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <StyledGlobal />
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>
);