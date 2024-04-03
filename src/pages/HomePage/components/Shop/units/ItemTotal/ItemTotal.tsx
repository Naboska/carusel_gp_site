import { useMemo } from 'react';

import type { TShopGroupItem } from 'services/api';

import type { TItemTotal } from './types';

const sumFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'unit',
  unit: 'liter',
  maximumFractionDigits: 0,
});

export const ItemTotal = ({ selectedIds, groups }: TItemTotal) => {
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

  if (!sum) return <></>;

  const formattedSum = sumFormatter.format(Math.abs(sum));

  return (
    <div>
      {selectedItems.map(item => (
        <div key={item.id}>
          {item.name} ({selectedIds.filter(id => id === item.id).length})
        </div>
      ))}
      <p>
        {sum < 0 ? `Мы заплатим: ` : `Итого: `}
        {formattedSum}
      </p>
    </div>
  );
};
