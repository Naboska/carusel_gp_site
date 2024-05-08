import { Icon } from 'elui-react';

import { StyledHeader, StyledInput, StyledLogo } from './styled';
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
      <StyledInput leftSlot={<Icon.Search />} placeholder="Поиск по магазину" onChange={onSearch} value={searchValue} />
    </StyledHeader>
  );
};
