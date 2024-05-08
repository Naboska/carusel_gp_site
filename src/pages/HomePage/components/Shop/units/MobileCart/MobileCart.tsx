import { Button, Dialog, Typography, useToggle } from 'elui-react';

import { declination } from 'lib/helpers/declination';

import { useShopContext } from '../../hooks';
import { Cart } from '../Cart';

import { StyledMobileCartBox } from './styled';

export const MobileCart = () => {
  const [isOpen, onOpen] = useToggle(false);
  const { selectedIds } = useShopContext();
  const cartCount = selectedIds.length;

  if (!cartCount) return <></>;

  return (
    <StyledMobileCartBox>
      <Typography typographyStyle={{ display: 'block', marginBottom: 8, textAlign: 'center' }}>
        В корзине {selectedIds.length} {declination(cartCount, ['товар', 'товара', 'товаров'])}
      </Typography>
      <Button buttonStyle={{ width: '100%' }} onClick={onOpen}>
        Корзина
      </Button>
      <Dialog
        variant="bottom-sheet"
        header="Корзина"
        isOpen={isOpen}
        onClose={onOpen}
        bodyStyle={{ padding: 0, maxHeight: '80vh' }}
      >
        <Cart />
      </Dialog>
    </StyledMobileCartBox>
  );
};
