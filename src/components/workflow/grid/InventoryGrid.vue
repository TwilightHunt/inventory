<template>
  <div class="inventory-grid block">
    <table class="inventory-grid__table">
      <tr class="inventory-grid__table__tr" v-for="(row, i) in rows">
        <th class="inventory-grid__table__th" v-for="(column, j) in columns">
          <GridElement :element="elements[i][j]" />
        </th>
      </tr>
    </table>
  </div>
</template>

<script setup>
import GridElement from "./GridElement.vue";
import { useElementsStore } from "@/stores/elements";
import { useItemsStore } from "@/stores/items";

const rows = 5;
const columns = 5;

const elementsStore = useElementsStore();
const itemsStore = useItemsStore();
const { initializeEmptyGrid, setItemPosition } = useElementsStore();
const elements = elementsStore.elements;
const items = itemsStore.items;

if (elements.length < rows * columns) {
  initializeEmptyGrid(rows, columns);
  setItemPosition(0, 0, items[0], 4);
  setItemPosition(0, 1, items[1], 2);
  setItemPosition(0, 2, items[2], 5);
}
</script>

<style lang="scss" scoped>
.inventory-grid {
  &__table {
    border-collapse: collapse;
    border-style: hidden;
    &__tr,
    &__th {
      border: 1px solid #4d4d4d;
    }
  }
}
</style>
