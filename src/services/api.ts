import { HttpClient } from './http-client';

export type TShopItemType = 'buy' | 'sell';

export type TShopGroupItem = {
  id: number;
  group: number;
  isShow: boolean;
  name: string;
  type: TShopItemType;
  price: number;
  image: string;
  more: string;
  description: string;
};

export type TShopGroup = {
  id: number;
  name: string;
  description: string;
};

export class Api extends HttpClient {
  constructor() {
    super();
    this.publicUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=';
  }

  public async groups(): Promise<TShopGroup[]> {
    return this.request<TShopGroup[]>({
      path: `HLu4I4VDAz7H-Xoj7NB6p3UbmjkC54mXhudJbJOGS4KXheTRD4XMme6LoYg5Ll226eCimpfY032Yjf4B5fRZf5cpOxFj0l-Vm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnN6YiIuVeGMY34sfAlt1HsKz2q7MWnlwfaawxMuaL_FqQdBiMzDyRX2ixDFywk9psybw2tGbChd9tOymKp9JFyWucyOD0kGKvw&lib=MQCmmcywCJXhBMsMuMX5scPYlDj38wupO`,
      method: 'GET',
    });
  }

  public async items(): Promise<TShopGroupItem[]> {
    return this.request<TShopGroupItem[]>({
      path: `ZtZ6T_6luLHI9_NqkC-3KG-2uaglWmMiph_8grbbytqGNJLKDTM5ACTuDGEEC9hSp4AbpsDzOSD3hWTYspoV8FEsH8IEzmyWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGvZegsOf76SnTZ66G7s9hIKb8YcCBJXfjzzvvLpLqMx-NXdxgHXYXAnvDKWpnA0LuhITDg4_fgI98HUV2ScVtUws6A1-o5N5g&lib=MQCmmcywCJXhBMsMuMX5scPYlDj38wupO`,
      method: 'GET',
    });
  }
}

export const api = new Api();
