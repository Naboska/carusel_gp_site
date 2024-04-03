import { useCallback, useState } from 'react';

export const useSelectedItems = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const add = useCallback((id: number) => {
    setSelectedIds(prev => [...prev, id]);
  }, []);

  const remove = useCallback((id: number) => {
    setSelectedIds(prev => {
      const index = prev.indexOf(id);
      if (index === -1) return prev;

      const next = [...prev];
      next.splice(index, 1);

      return next;
    });
  }, []);

  return {
    selectedIds,
    add,
    remove,
  };
};
