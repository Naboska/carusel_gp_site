import { HttpClient } from './http-client';

export type TShopItemType = 'buy' | 'sell';

export type TShopGroupItem = {
  id: number;
  name: string;
  type: TShopItemType;
  description: string;
  image: string;
  more: number[];
  price: number;
};

export type TShopGroup = {
  name: string;
  description: string;
  items: TShopGroupItem[];
};

export type TShopResponse = {
  groups: TShopGroup[];
};

console.log(import.meta.env);

export class Api extends HttpClient {
  constructor() {
    super();
    this.publicUrl = import.meta.env.BASE_URL;
  }

  public shop(): Promise<TShopResponse> {
    return this.request<TShopResponse>({
      path: 'shop.json',
      method: 'GET',
    });
  }
}

export const api = new Api();
