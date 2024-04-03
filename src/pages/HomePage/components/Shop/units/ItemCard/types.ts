import type { TShopGroupItem } from 'services/api';

export type TItemCard = {
  item: TShopGroupItem;
  selectedIds: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
};
