import { Button, Typography } from 'elui-react';
import { useCallback } from 'react';

import type { TShopGroupItem } from 'services/api';

import { useShopContext } from '../../hooks';

import { StyledActions, StyledTotalItem } from './styled.ts';

export const TotalItem = ({ name, id }: TShopGroupItem) => {
  const { selectedIds, add, remove } = useShopContext();

  const handleAdd = useCallback(() => {
    add(id);
  }, [add, id]);

  const handleRemove = useCallback(() => {
    remove(id);
  }, [id, remove]);

  return (
    <StyledTotalItem>
      <Typography>{name}</Typography>
      <StyledActions>
        <Button variant="white" onClick={handleRemove}>
          -
        </Button>
        <Typography typographyStyle={{ display: 'block', margin: '0 4px', minWidth: 20, textAlign: 'center' }}>
          {selectedIds.filter(itemId => itemId === id).length}
        </Typography>
        <Button variant="white" onClick={handleAdd}>
          +
        </Button>
      </StyledActions>
    </StyledTotalItem>
  );
};
