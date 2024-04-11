import { useQuery } from '@tanstack/react-query';

import { TShopGroupItem, api } from 'services/api';

export const SHOP_ITEMS_QUERY_KEY = ['items'];

export const useShopItemsQuery = () => {
  const { data, isFetching, isError } = useQuery<TShopGroupItem[]>({
    queryKey: SHOP_ITEMS_QUERY_KEY,
    queryFn: () => api.items(),
  });

  return {
    items: data ?? [],
    isFetching,
    isError,
  };
};
