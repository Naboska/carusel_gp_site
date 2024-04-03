import { useMemo } from 'react';
import { useUpdateEffect } from 'react-use';
import { Typography } from 'elui-react';

import type { TShopGroupItem } from 'services/api';
import { lamaniFormatter } from 'lib/helpers/lamani-formatter';

import { useShopContext } from '../../hooks';
import { TotalItem } from '../TotalItem';

import type { TItemTotal } from './types';
import { StyledFooter, StyledItems } from './styled';

export const ItemTotal = ({ groups }: TItemTotal) => {
  const { selectedIds } = useShopContext();

  const selectedItems = useMemo(() => {
    const items: TShopGroupItem[] = [];
    const groupItems = groups.map(e => e.items).flat(1);

    for (const id of new Set(selectedIds).keys()) {
      const item = groupItems.find(item => item.id === id)!;
      items.push(item);
    }

    return items;
  }, [groups, selectedIds]);

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
      <StyledItems>
        {!selectedItems.length && <Typography>Ничего не выбрано!</Typography>}
        {selectedItems.map(item => (
          <TotalItem key={item.id} {...item} />
        ))}
      </StyledItems>
      <StyledFooter>
        <Typography>
          {sum < 0 ? `Мы заплатим: ` : `Итого: `}
          {formattedSum}
        </Typography>
      </StyledFooter>
    </>
  );
};
