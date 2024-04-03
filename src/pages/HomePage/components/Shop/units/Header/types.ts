import type { ChangeEventHandler } from 'react';

export type THeader = {
  onSearch: ChangeEventHandler<HTMLInputElement>;
  searchValue: string;
};
