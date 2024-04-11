import { SyntheticEvent, useCallback, useMemo, useState } from 'react';

import { useDebounce } from 'lib/hooks/use-debounce';
import { useShopItemsQuery } from 'services';

export const useShopSearch = () => {
  const [searchValue, setSearch] = useState('');
  const debounceSearch = useDebounce(searchValue, 300);

  const { items } = useShopItemsQuery();

  const filteredShop = useMemo(() => {
    if (!debounceSearch) return items;

    return items.filter(item => item.name.toLowerCase().includes(debounceSearch.toLowerCase()));
  }, [debounceSearch, items]);

  const onSearch = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trimStart();
    setSearch(value);
  }, []);

  return {
    filteredShop,
    searchValue,
    debounceSearch,
    onSearch,
  };
};
