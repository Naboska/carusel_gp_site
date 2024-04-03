import { useShopQuery } from 'services';

import { Shop } from './components';

export const HomePage = () => {
  const { shop, isFetching, isError } = useShopQuery();

  if (isFetching) return <div>loading</div>;

  if (isError) return <div>gg wp, refresh</div>;

  return <Shop groups={shop} />;
};
