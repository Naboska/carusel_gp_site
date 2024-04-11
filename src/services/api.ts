import { HttpClient } from './http-client';

export type TShopItemType = 'buy' | 'sell';

export type TShopGroupItem = {
  id: number;
  name: string;
  group: number;
  type: TShopItemType;
  description?: string;
  image: string;
  more?: number[];
  price: number;
  isShow: boolean;
};

export type TShopGroup = {
  id: number;
  name: string;
  description?: string;
};

export class Api extends HttpClient {
  constructor() {
    super();
    this.publicUrl = 'https://sheet.best/api/sheets/2eb08067-a222-4dd2-819c-9e9169d86f66';
  }

  public async groups(): Promise<TShopGroup[]> {
    const response = await this.request<TShopGroup[]>({
      path: '/tabs/groups',
      method: 'GET',
    });

    return response.map(group => ({
      ...group,
      id: Number(group.id),
    }));
  }

  public async items(): Promise<TShopGroupItem[]> {
    const response = await this.request<TShopGroupItem[]>({
      path: '/tabs/items',
      method: 'GET',
    });

    return response.map(item => ({
      ...item,
      id: Number(item.id),
      price: Number(item.price),
      group: Number(item.group),
      more: (item.more as unknown as string)?.split(',').map(Number),
      isShow: (item.isShow as unknown as 'TRUE' | 'FALSE') === 'TRUE',
    }));
  }
}

export const api = new Api();
