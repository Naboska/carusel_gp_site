import { useQuery } from '@tanstack/react-query';

import { TShopGroup, api } from 'services/api';

export const SHOP_GROUP_QUERY_KEY = ['groups'];

export const useShopGroupsQuery = () => {
  const { data, isFetching, isError } = useQuery<TShopGroup[]>({
    queryKey: SHOP_GROUP_QUERY_KEY,
    queryFn: () => api.groups(),
  });

  return {
    groups: data ?? [],
    isFetching,
    isError,
  };
};
