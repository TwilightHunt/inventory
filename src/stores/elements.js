import { defineStore } from "pinia";

export const useElementsStore = defineStore({
  id: "element",
  state: () => ({
    elements: [],
  }),
  actions: {
    initializeEmptyGrid(rows, columns) {
      const emptyElement = { item: null, amount: 0 };
      let id = 0;

      for (let i = 0; i < rows; i++) {
        this.elements[i] = [];
        for (let j = 0; j < columns; j++) {
          this.elements[i][j] = {
            ...emptyElement,
            id,
            coordinates: { i, j },
          };
          id++;
        }
      }
    },

    setItemPosition(i, j, item, amount) {
      this.elements[i][j].item = item;
      this.elements[i][j].amount = amount;
    },

    clearElement(i, j) {
      this.elements[i][j] = {
        item: null,
        amount: 0,
        id: this.elements[i][j].id,
        coordinates: { i, j },
      };
    },
  },
  persist: true,
});
