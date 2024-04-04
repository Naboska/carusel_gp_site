import { useMemo, useState } from 'react';
import { Tabs, Typography } from 'elui-react';
import { useFirstMountState } from 'react-use/esm/useFirstMountState';

import { TShopGroup } from 'services/api';

import type { TShop, TShopContext, TShopTabName } from './types';
import { ShopProvider, useSelectedItems, useShopSearch } from './hooks';
import { Cart, Header, ItemCard } from './units';
import { StyledCartBox, StyledShop, StyledShopGroup, StyledShopGroupItem, StyledShopItems, StyledTabs } from './styled';

export const Shop = ({ groups }: TShop) => {
  const [activeTab, setActiveTab] = useState<TShopTabName>('buy');
  const isFirstMount = useFirstMountState();
  const { searchValue, debounceSearch, filteredShop, onSearch } = useShopSearch(groups);
  const { add, remove, removeAll, selectedIds } = useSelectedItems();

  const ctx = useMemo<TShopContext>(() => {
    return { add, remove, removeAll, selectedIds };
  }, [add, remove, removeAll, selectedIds]);

  const activeFilteredShop = useMemo(() => {
    if (debounceSearch) return filteredShop;

    return filteredShop.reduce<TShopGroup[]>((acc, curr) => {
      const currentItems = curr.items.filter(item => item.type === activeTab);

      if (currentItems.length) acc.push({ ...curr, items: currentItems });

      return acc;
    }, []);
  }, [filteredShop, activeTab, debounceSearch]);

  return (
    <ShopProvider value={ctx}>
      <Header onSearch={onSearch} searchValue={searchValue} />
      {!debounceSearch && (
        <StyledTabs>
          <Tabs<TShopTabName>
            isScrollable={false}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            activeLineStyle={isFirstMount ? undefined : { transitionDuration: '.3s!important' }}
          >
            <Tabs.Tab<TShopTabName> value="buy">Продать</Tabs.Tab>
            <Tabs.Tab<TShopTabName> value="sell">Купить</Tabs.Tab>
          </Tabs>
        </StyledTabs>
      )}
      <StyledShop>
        {!activeFilteredShop.length && (
          <Typography variant="h6">{`По запросу «${debounceSearch}» ничего не найдено`}</Typography>
        )}
        <StyledShopGroup>
          {activeFilteredShop.map(({ name, description, items }, shopIndex) => (
            <StyledShopGroupItem key={shopIndex}>
              <Typography variant="h4" typographyStyle={{ display: 'block', paddingBottom: 8 }}>
                {name}
              </Typography>
              <Typography typographyStyle={{ display: 'block', marginBottom: 24 }}>{description}</Typography>
              <StyledShopItems>
                {items.map(item => (
                  <ItemCard key={item.id} {...{ item }} />
                ))}
              </StyledShopItems>
            </StyledShopGroupItem>
          ))}
        </StyledShopGroup>
      </StyledShop>
      <StyledCartBox>
        <Cart groups={groups} />
      </StyledCartBox>
    </ShopProvider>
  );
};
