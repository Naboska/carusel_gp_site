import { Button, Icon, Input } from 'elui-react';
import { useCallback, useState } from 'react';

import { StyledHeader, StyledLogo } from './styled';
import type { THeader } from './types';

export const Header = ({ searchValue, onSearch }: THeader) => {
  const [isLinkSave, setIsLinkSave] = useState(false);

  const onSave = useCallback(async () => {
    await navigator.clipboard.writeText(window.location.href);
    setIsLinkSave(true);
    setTimeout(() => setIsLinkSave(false), 500);
  }, []);

  return (
    <StyledHeader>
      <StyledLogo src={`${import.meta.env.BASE_URL}/logo.png`} width={66} alt="logo" />
      <Input
        leftSlot={<Icon.Search />}
        placeholder="Поиск по магазину"
        boxStyle={{ maxWidth: 592, paddingBottom: 0 }}
        onChange={onSearch}
        value={searchValue}
      />
      <Button variant="outline" buttonStyle={{ marginLeft: 'auto' }} onClick={onSave}>
        {isLinkSave ? 'Ссылка скопирована' : 'Скопировать ссылку'}
      </Button>
    </StyledHeader>
  );
};
