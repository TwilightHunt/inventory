import { defineStore } from "pinia";

export const useItemsStore = defineStore({
  id: "item",
  state: () => ({
    items: [
      { id: 0, name: "green", image: "src/assets/imgs/items/green-item.png" },
      {
        id: 1,
        name: "yellow",
        image: "src/assets/imgs/items/yellow-item.png",
      },
      { id: 2, name: "blue", image: "src/assets/imgs/items/blue-item.png" },
    ],
  }),
  persist: true,
});
