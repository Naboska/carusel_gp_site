import { useQuery } from '@tanstack/react-query';

import { TShopResponse, api } from 'services/api';

export const SHOP_QUERY_KEY = ['shop'];

export const useShopQuery = () => {
  const { data, isFetching, isError } = useQuery<TShopResponse>({
    queryKey: SHOP_QUERY_KEY,
    queryFn: () => api.shop(),
  });

  return {
    shop: data?.groups ?? [],
    isFetching,
    isError,
  };
};
