import { useMemo } from 'react';
import { useUpdateEffect } from 'react-use';
import { Button, Empty, Typography } from 'elui-react';

import { lamaniFormatter } from 'lib/helpers/lamani-formatter';
import { useShopItemsQuery } from 'services';

import { useShopContext } from '../../hooks';
import { CartItem } from '../CartItem';
import { CopyButton } from '../CopyButton';

import { StyledFooter, StyledFooterBox, StyledHeader, StyledItems } from './styled';

export const Cart = () => {
  const { selectedIds, removeAll } = useShopContext();
  const { items } = useShopItemsQuery();

  const selectedItems = useMemo(() => {
    return [...new Set(selectedIds).keys()];
  }, [selectedIds]);

  const sellItems = useMemo(() => {
    return items.filter(item => selectedItems.includes(item.id) && item.type === 'sell');
  }, [items, selectedItems]);

  const buyItems = useMemo(() => {
    return items.filter(item => selectedItems.includes(item.id) && item.type === 'buy');
  }, [items, selectedItems]);

  const sum = useMemo(() => {
    const items = [...sellItems, ...buyItems];

    return selectedIds.reduce((sum, id) => {
      const item = items.find(item => item.id === id)!;

      return item.type === 'sell' ? sum + item.price : sum - item.price;
    }, 0);
  }, [buyItems, selectedIds, sellItems]);

  useUpdateEffect(() => {
    window.location.hash = selectedIds.length ? `#${btoa(selectedIds.join(','))}` : '#-';
  }, [selectedIds]);

  const formattedSum = lamaniFormatter.format(Math.abs(sum));

  return (
    <>
      <StyledHeader>
        <Typography variant="h6">Корзина</Typography>
        <Button variant="white" onClick={removeAll} buttonStyle={{ visibility: sum !== 0 ? 'visible' : 'hidden' }}>
          Очистить
        </Button>
      </StyledHeader>
      <StyledItems className="kek" data-scroll-lock-scrollable>
        {!selectedItems.length && (
          <Empty
            image="https://yastatic.net/s3/lavka-web/public/assets/images/emptyCart@2x.png"
            imageStyle={{ width: 100, height: 100 }}
            title="В вашей корзине пока пусто"
            description="Тут появятся товары, которые вы закажете"
            boxStyle={{ margin: 'auto', padding: 24 }}
          />
        )}
        {!!buyItems.length && (
          <Typography variant="st1" typographyStyle={{ padding: '24px 16px' }}>
            Продаю
          </Typography>
        )}
        {buyItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
        {!!sellItems.length && (
          <Typography variant="st1" typographyStyle={{ padding: '16px 16px' }}>
            Покупаю
          </Typography>
        )}
        {sellItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </StyledItems>
      {sum !== 0 && (
        <StyledFooterBox>
          <StyledFooter>
            <Typography variant="st1">{sum < 0 ? `Мы заплатим:` : `Ты заплатишь:`}</Typography>
            <Typography variant="st1">{formattedSum}</Typography>
          </StyledFooter>
          <CopyButton />
        </StyledFooterBox>
      )}
    </>
  );
};
