import { useCallback, useMemo } from 'react';
import { Button, Icon, Popover, Typography } from 'elui-react';

import { lamaniFormatter } from 'lib/helpers/lamani-formatter';

import { useShopContext } from '../../hooks';

import type { TItemCard } from './types';
import { StyledAddToCartButton, StyledCard, StyledCardActions, StyledCardTypography, StyledTitle } from './styled';

export const ItemCard = ({ item }: TItemCard) => {
  const { add, remove, selectedIds } = useShopContext();

  const selectedCount = useMemo(() => {
    return selectedIds.filter(ids => ids === item.id).length;
  }, [item.id, selectedIds]);

  const handleAdd = useCallback(() => add(item.id), [add, item.id]);

  return (
    <StyledCard>
      <StyledTitle variant="h6">
        {item.name}
        {item.description && (
          <>
            {' '}
            <Popover popoverStyle={{ padding: 8 }} popover={<Typography>{item.description}</Typography>}>
              <Icon.Info size={16} iconStyle={{ cursor: 'pointer' }} />
            </Popover>
          </>
        )}
      </StyledTitle>
      <img src={item.image} alt={item.name} />
      <StyledCardTypography variant="h6">{lamaniFormatter.format(item.price)}</StyledCardTypography>
      {!selectedCount ? (
        <StyledAddToCartButton variant="white" onClick={handleAdd}>
          {item.type === 'buy' ? 'Продать' : 'Купить'}
        </StyledAddToCartButton>
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
