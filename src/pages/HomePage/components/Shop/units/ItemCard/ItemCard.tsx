import { useCallback, useMemo } from 'react';
import { Button, Icon, Popover, Typography } from 'elui-react';

import { lamaniFormatter } from 'lib/helpers/lamani-formatter';

import { useShopContext } from '../../hooks';

import type { TItemCard } from './types';
import { StyledCard, StyledCardActions } from './styled';

export const ItemCard = ({ item }: TItemCard) => {
  const { add, remove, selectedIds } = useShopContext();

  const selectedCount = useMemo(() => {
    return selectedIds.filter(ids => ids === item.id).length;
  }, [item.id, selectedIds]);

  const handleAdd = useCallback(() => add(item.id), [add, item.id]);

  return (
    <StyledCard>
      <Typography variant="h6" typographyStyle={{ display: 'block', textAlign: 'center', minHeight: 56 }}>
        {item.name}
        {item.description && (
          <>
            {' '}
            <Popover popoverStyle={{ padding: 8 }} popover={<Typography>{item.description}</Typography>}>
              <Icon.Info size={16} iconStyle={{ cursor: 'pointer' }} />
            </Popover>
          </>
        )}
      </Typography>
      <img src={item.image} alt={item.name} />
      <Typography variant="h6">{lamaniFormatter.format(item.price)}</Typography>
      {!selectedCount ? (
        <Button variant="white" onClick={handleAdd} buttonStyle={{ marginTop: 24 }}>
          {item.type === 'buy' ? 'Продать' : 'Купить'}
        </Button>
      ) : (
        <StyledCardActions>
          <Button variant="primary" onClick={() => remove(item.id)}>
            -
          </Button>
          <Typography typographyStyle={{ minWidth: 40, textAlign: 'center' }}>{selectedCount}</Typography>
          <Button variant="primary" onClick={() => add(item.id)}>
            +
          </Button>
        </StyledCardActions>
      )}
    </StyledCard>
  );
};
