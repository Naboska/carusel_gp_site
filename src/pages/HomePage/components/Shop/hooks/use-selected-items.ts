import { useCallback, useState } from 'react';

export const useSelectedItems = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>(() => {
    const items = window.location.hash.replace('#', '');
    if (!items.length) return [];

    try {
      return atob(items).split(',').map(Number);
    } catch (e) {
      return [];
    }
  });

  const add = useCallback((id: number) => {
    setSelectedIds(prev => [...prev, id]);
  }, []);

  const remove = useCallback((id: number) => {
    setSelectedIds(prev => {
      const index = prev.lastIndexOf(id);
      if (index === -1) return prev;

      const next = [...prev];
      next.splice(index, 1);

      return next;
    });
  }, []);

  const removeAll = useCallback(() => {
    setSelectedIds([]);
  }, []);

  return {
    selectedIds,
    add,
    remove,
    removeAll,
  };
};
