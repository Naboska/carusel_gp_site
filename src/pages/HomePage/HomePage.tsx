import { Box, Typography } from 'elui-react';

import { useShopQuery } from 'services';

import { Shop } from './components';

export const HomePage = () => {
  const { shop, isFetching, isError } = useShopQuery();

  if (isFetching)
    return (
      <Box
        boxStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}
      >
        <Typography variant="h4">Звоню эксидам, сейчас подойдут...</Typography>
      </Box>
    );

  if (isError) return <div>gg wp, refresh</div>;

  return <Shop groups={shop} />;
};
