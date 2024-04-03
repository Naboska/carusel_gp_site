import { createContext, useContext } from 'react';

import type { TShopContext } from '../types';

const ShopContext = createContext<TShopContext>({} as TShopContext);
ShopContext.displayName = 'TShopContext';

export const ShopProvider = ShopContext.Provider;

export const useShopContext = () => useContext(ShopContext);
