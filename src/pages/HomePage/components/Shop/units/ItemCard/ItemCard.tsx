import { useMemo } from 'react';

import { TItemCard } from './types.ts';
import { StyledCardActions } from './styled.ts';

export const ItemCard = ({ item, selectedIds, add, remove }: TItemCard) => {
  const selectedCount = useMemo(() => {
    return selectedIds.filter(ids => ids === item.id).length;
  }, [item.id, selectedIds]);

  return (
    <div>
      <h3>{item.name}</h3>
      <img src={import.meta.env.BASE_URL + item.image} width={150} height={150} alt={item.name} />
      <p>{item.price}</p>
      <StyledCardActions>
        <button disabled={!selectedCount} onClick={() => remove(item.id)}>
          -
        </button>
        <div>{selectedCount}</div>
        <button onClick={() => add(item.id)}>+</button>
      </StyledCardActions>
    </div>
  );
};
