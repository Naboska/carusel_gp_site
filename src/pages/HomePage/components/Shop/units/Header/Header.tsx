import { Icon, Input } from 'elui-react';

import { StyledHeader, StyledLogo } from './styled';
import type { THeader } from './types';

export const Header = ({ searchValue, onSearch }: THeader) => {
  return (
    <StyledHeader>
      <StyledLogo
        src={`${import.meta.env.BASE_URL}/logo.png`}
        width={66}
        alt="logo"
        onClick={() => window.location.reload()}
      />
      <Input
        leftSlot={<Icon.Search />}
        placeholder="Поиск по магазину"
        boxStyle={{ maxWidth: 300, paddingBottom: 0 }}
        onChange={onSearch}
        value={searchValue}
      />
    </StyledHeader>
  );
};
