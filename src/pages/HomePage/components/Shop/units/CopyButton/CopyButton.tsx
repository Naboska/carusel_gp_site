import { Button } from 'elui-react';
import { useCallback, useState } from 'react';

export const CopyButton = () => {
  const [isLinkSave, setIsLinkSave] = useState(false);

  const onSave = useCallback(async () => {
    await navigator.clipboard.writeText(window.location.href);
    setIsLinkSave(true);
    setTimeout(() => setIsLinkSave(false), 500);
  }, []);

  return (
    <Button onClick={onSave} buttonStyle={{ margin: '0 24px 24px' }}>
      {isLinkSave ? 'Ссылка скопирована' : 'Скопировать ссылку на заказ'}
    </Button>
  );
};
