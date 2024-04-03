import type { TShopGroup } from 'services/api';

export type TShop = {
  groups: TShopGroup[];
};

export type TShopContext = {
  selectedIds: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
  removeAll: (id: number) => void;
};
