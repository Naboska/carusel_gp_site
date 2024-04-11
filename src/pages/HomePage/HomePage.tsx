import { Box } from 'elui-react';

import { useShopGroupsQuery, useShopItemsQuery } from 'services';

import { LoaderText, Shop } from './components';

export const HomePage = () => {
  const { isFetching: isGroupsLoading, isError: isGroupsError } = useShopGroupsQuery();
  const { isFetching: isItemsLoading, isError: isItemsError } = useShopItemsQuery();

  const isFetching = isGroupsLoading || isItemsLoading;
  const isError = isGroupsError || isItemsError;

  if (isFetching)
    return (
      <Box
        boxStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}
      >
        <LoaderText />
      </Box>
    );

  if (isError) return <div>gg wp, refresh</div>;

  return <Shop />;
};
