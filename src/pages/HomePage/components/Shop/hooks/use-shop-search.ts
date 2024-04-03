import { SyntheticEvent, useCallback, useMemo, useState } from 'react';

import type { TShopGroup } from 'services/api';
import { useDebounce } from 'lib/hooks/use-debounce';

export const useShopSearch = (shop: TShopGroup[]) => {
  const [searchValue, setSearch] = useState('');
  const debounceSearch = useDebounce(searchValue, 300);

  const filteredShop = useMemo(() => {
    if (!debounceSearch) return shop;

    return shop.reduce<TShopGroup[]>((acc, curr) => {
      const filteredItems = curr.items.filter(item => item.name.toLowerCase().includes(debounceSearch.toLowerCase()));

      if (filteredItems.length) {
        acc.push({ ...curr, items: filteredItems });
      }

      return acc;
    }, []);
  }, [debounceSearch, shop]);

  const onSearch = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setSearch(value);
  }, []);

  return {
    filteredShop,
    searchValue,
    onSearch,
  };
};
