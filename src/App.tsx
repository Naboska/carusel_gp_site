import { useCallback, useEffect } from 'react';
import { Box, Empty } from 'elui-react';
import { createGlobalStyle } from 'styled-components';

export const App = () => {
  const handleGoToNextLink = useCallback(() => {
    window.open(`https://exsidium-lab.github.io/shop/${location.hash}`);
  }, []);

  useEffect(() => {
    setTimeout(handleGoToNextLink, 1000);
  }, [handleGoToNextLink]);

  return (
    <Box boxStyle={{ alignCenter: 'center' }}>
      <Global />
      <Empty
        title="Магазин переехал"
        description="Мы попытались автоматически перенаправить Вас на новую ссылку, но увы, браузер заблокировал"
        primaryBtn={{ children: 'Перейти', onClick: handleGoToNextLink }}
      />
    </Box>
  );
};

const Global = createGlobalStyle`
  #root {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
  }
`;
