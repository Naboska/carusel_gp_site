import { useMemo } from 'react';
import { Button, Typography } from 'elui-react';

import { lamaniFormatter } from 'lib/helpers/lamani-formatter';

import { useShopContext } from '../../hooks';

import { TItemCard } from './types.ts';
import { StyledCard, StyledCardActions } from './styled.ts';

export const ItemCard = ({ item }: TItemCard) => {
  const { add, remove, selectedIds } = useShopContext();

  const selectedCount = useMemo(() => {
    return selectedIds.filter(ids => ids === item.id).length;
  }, [item.id, selectedIds]);

  const isDisableMinus = !selectedCount;

  return (
    <StyledCard>
      <Typography variant="h6">{item.name}</Typography>
      <img src={import.meta.env.BASE_URL + item.image} alt={item.name} />
      <Typography variant="h6">{lamaniFormatter.format(item.price)}</Typography>
      <StyledCardActions>
        <Button
          variant={isDisableMinus ? 'white' : 'primary'}
          disabled={isDisableMinus}
          onClick={() => remove(item.id)}
        >
          -
        </Button>
        <Typography typographyStyle={{ minWidth: 40, textAlign: 'center' }}>{selectedCount}</Typography>
        <Button variant="primary" onClick={() => add(item.id)}>
          +
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};
