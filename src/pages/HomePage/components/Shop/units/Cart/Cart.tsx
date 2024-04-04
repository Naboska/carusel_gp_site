import { useMemo } from 'react';
import { useUpdateEffect } from 'react-use';
import { Button, Chip, Empty, Typography } from 'elui-react';

import type { TShopGroupItem } from 'services/api';
import { lamaniFormatter } from 'lib/helpers/lamani-formatter';

import { useShopContext } from '../../hooks';
import { CartItem } from '../CartItem';
import { CopyButton } from '../CopyButton';

import type { TItemTotal } from './types';
import { StyledFooter, StyledFooterBox, StyledHeader, StyledItems } from './styled';

export const Cart = ({ groups }: TItemTotal) => {
  const { selectedIds, add, removeAll } = useShopContext();

  const groupItems = useMemo(() => {
    return groups.map(e => e.items).flat(1);
  }, [groups]);

  const selectedItems = useMemo(() => {
    const items: TShopGroupItem[] = [];

    for (const id of new Set(selectedIds).keys()) {
      const item = groupItems.find(item => item.id === id)!;
      items.push(item);
    }

    return items;
  }, [selectedIds, groupItems]);

  const sellItems = useMemo(() => {
    return selectedItems.filter(item => item.type === 'sell');
  }, [selectedItems]);

  const buyItems = useMemo(() => {
    return selectedItems.filter(item => item.type === 'buy');
  }, [selectedItems]);

  const maybeSell = useMemo(() => {
    const items = new Set<number>();

    for (const selectedItem of selectedItems) {
      for (const id of selectedItem.more) if (!selectedIds.includes(id)) items.add(id);
    }

    return [...items.keys()].map(id => groupItems.find(item => item.id === id)!);
  }, [groupItems, selectedIds, selectedItems]);

  const sum = useMemo(() => {
    return selectedIds.reduce((sum, id) => {
      const item = selectedItems.find(item => item.id === id)!;

      return item.type === 'sell' ? sum + item.price : sum - item.price;
    }, 0);
  }, [selectedIds, selectedItems]);

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
      <StyledItems>
        {!!maybeSell.length && (
          <div style={{ position: 'sticky', top: 0 }}>
            <Typography>С этим покупают:</Typography>
            {maybeSell.map(({ id, image, name }) => (
              <Chip
                key={id}
                variant="default"
                value={id}
                leftSlot={<img src={image} width={20} height={20} alt={name} />}
                onChip={e => add(e.value!)}
              >
                {name}
              </Chip>
            ))}
          </div>
        )}
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
            <Typography variant="st1">{sum < 0 ? `Мы заплатим:` : `Итого:`}</Typography>
            <Typography variant="st1">{formattedSum}</Typography>
          </StyledFooter>
          <CopyButton />
        </StyledFooterBox>
      )}
    </>
  );
};
