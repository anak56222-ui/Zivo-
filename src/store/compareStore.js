import { create } from "zustand";

const MAX_COMPARE_ITEMS = 3;

export const useCompareStore = create((set, get) => ({
  selectedIds: [],
  addToCompare: (id) => {
    const { selectedIds } = get();
    if (selectedIds.includes(id)) return;
    if (selectedIds.length >= MAX_COMPARE_ITEMS) return;
    set({ selectedIds: [...selectedIds, id] });
  },
  removeFromCompare: (id) => {
    set((state) => ({ selectedIds: state.selectedIds.filter((itemId) => itemId !== id) }));
  },
  toggleCompare: (id) => {
    const { selectedIds, addToCompare, removeFromCompare } = get();
    if (selectedIds.includes(id)) {
      removeFromCompare(id);
      return;
    }
    addToCompare(id);
  },
  clearCompare: () => set({ selectedIds: [] }),
}));

export const maxCompareItems = MAX_COMPARE_ITEMS;
