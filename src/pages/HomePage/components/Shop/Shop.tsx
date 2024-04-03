import { TShop } from './types.ts';
import { useSelectedItems, useShopSearch } from './hooks';
import { ItemCard, ItemTotal } from './units';
import { StyledShop, StyledShopGroup, StyledShopGroupItem, StyledShopItems, StyledTotalBox } from './styled.ts';

export const Shop = ({ groups }: TShop) => {
  const { searchValue, filteredShop, onSearch } = useShopSearch(groups);
  const { add, remove, selectedIds } = useSelectedItems();

  return (
    <>
      <input onChange={onSearch} value={searchValue} placeholder="Поиск по магазину" />
      <StyledShop>
        <StyledShopGroup>
          {filteredShop.map(({ name, description, items }, shopIndex) => (
            <StyledShopGroupItem key={shopIndex}>
              <h2>{name}</h2>
              <p>{description}</p>
              <StyledShopItems>
                {items.map(item => (
                  <ItemCard key={item.id} {...{ add, remove, selectedIds, item }} />
                ))}
              </StyledShopItems>
            </StyledShopGroupItem>
          ))}
        </StyledShopGroup>
        <StyledTotalBox>
          <ItemTotal groups={groups} selectedIds={selectedIds} />
        </StyledTotalBox>
      </StyledShop>
    </>
  );
};
