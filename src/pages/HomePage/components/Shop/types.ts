import type { TShopGroup, TShopGroupItem } from 'services/api';

export type TGroup = TShopGroup & {
  items: TShopGroupItem[];
};

export type TShopContext = {
  selectedIds: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
  removeAll: () => void;
};
