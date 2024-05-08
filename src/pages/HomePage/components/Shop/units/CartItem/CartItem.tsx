import { Button, Typography } from 'elui-react';
import { useCallback } from 'react';

import type { TShopGroupItem } from 'services/api';
import { lamaniFormatter } from 'lib/helpers/lamani-formatter';

import { useShopContext } from '../../hooks';

import { StyledActions, StyledItemInfo, StyledItemPrice, StyledTotalItem } from './styled';

export const CartItem = ({ name, id, image, price }: TShopGroupItem) => {
  const { selectedIds, add, remove } = useShopContext();

  const count = selectedIds.filter(itemId => itemId === id).length;

  const handleAdd = useCallback(() => {
    add(id);
  }, [add, id]);

  const handleRemove = useCallback(() => {
    remove(id);
  }, [id, remove]);

  return (
    <StyledTotalItem>
      <StyledItemInfo>
        <img src={image} width={40} height={40} alt={name} />
        <StyledItemPrice>
          <Typography>{name}</Typography>
          <Typography variant="caption" color="grey_600">
            {lamaniFormatter.format(price * count)}
          </Typography>
        </StyledItemPrice>
      </StyledItemInfo>
      <StyledActions>
        <Button variant="white" onClick={handleRemove}>
          -
        </Button>
        <Typography typographyStyle={{ display: 'block', margin: '0 4px', minWidth: 20, textAlign: 'center' }}>
          {count}
        </Typography>
        <Button variant="white" onClick={handleAdd}>
          +
        </Button>
      </StyledActions>
    </StyledTotalItem>
  );
};
