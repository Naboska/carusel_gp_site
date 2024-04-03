import { Typography } from 'elui-react';
import { useMemo } from 'react';

import { TShop, TShopContext } from './types.ts';
import { ShopProvider, useSelectedItems, useShopSearch } from './hooks';
import { Header, ItemCard, ItemTotal } from './units';
import { StyledShop, StyledShopGroup, StyledShopGroupItem, StyledShopItems, StyledTotalBox } from './styled.ts';

export const Shop = ({ groups }: TShop) => {
  const { searchValue, filteredShop, onSearch } = useShopSearch(groups);
  const { add, remove, removeAll, selectedIds } = useSelectedItems();

  const ctx = useMemo<TShopContext>(() => {
    return { add, remove, removeAll, selectedIds };
  }, [add, remove, removeAll, selectedIds]);

  return (
    <ShopProvider value={ctx}>
      <Header onSearch={onSearch} searchValue={searchValue} />
      <StyledShop>
        <StyledShopGroup>
          {filteredShop.map(({ name, description, items }, shopIndex) => (
            <StyledShopGroupItem key={shopIndex}>
              <Typography variant="h4" typographyStyle={{ display: 'block' }}>
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
      <StyledTotalBox>
        <ItemTotal groups={groups} />
      </StyledTotalBox>
    </ShopProvider>
  );
};
