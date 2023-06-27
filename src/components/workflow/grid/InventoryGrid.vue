<template>
  <div class="inventory-grid block">
    <table class="inventory-grid__table">
      <tr class="inventory-grid__table__tr" v-for="(row, i) in rows">
        <th
          class="inventory-grid__table__th"
          v-for="(column, j) in columns"
          @dragover.prevent
          @dragenter.prevent
          @drop="onDrop($event, i, j)"
        >
          <GridElement
            @onDragStart="onDragStart"
            :element="elements[i][j]"
            @select="showItemInfo"
            :key="elements[i][j].id"
          />
        </th>
      </tr>
    </table>
    <ItemInfo :element="selectedItem" />
  </div>
</template>

<script setup>
import GridElement from "./GridElement.vue";
import ItemInfo from "./ItemInfo.vue";
import { useElementsStore } from "@/stores/elements";
import { useItemsStore } from "@/stores/items";
import { ref } from "vue";

const selectedItem = ref();
const rows = 5;
const columns = 5;

const elementsStore = useElementsStore();
const itemsStore = useItemsStore();
const { initializeEmptyGrid, setItemPosition, clearElement } =
  useElementsStore();
const elements = elementsStore.elements;
const items = itemsStore.items;

if (elements.length < rows * columns) {
  initializeEmptyGrid(rows, columns);
  setItemPosition(0, 0, items[0], 4);
  setItemPosition(0, 1, items[1], 2);
  setItemPosition(0, 2, items[2], 5);
}

const showItemInfo = (element) => {
  if (element.item) {
    selectedItem.value = element;
    document.querySelector(".item-info").classList.add("show");
  }
};

const onDragStart = (event, element) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("element", JSON.stringify(element));
};

const onDrop = (event, i, j) => {
  const element = JSON.parse(event.dataTransfer.getData("element"));
  console.log(element);
  if (elements[i][j].item) {
    setItemPosition(
      element.coordinates.i,
      element.coordinates.j,
      elements[i][j].item,
      elements[i][j].amount
    );
    setItemPosition(i, j, element.item, element.amount);
    return;
  }
  clearElement(element.coordinates.i, element.coordinates.j);
  setItemPosition(i, j, element.item, element.amount);
};
</script>

<style lang="scss" scoped>
.inventory-grid {
  position: relative;
  overflow-x: hidden;
  &__table {
    border-collapse: collapse;
    border-style: hidden;
    &__tr,
    &__th {
      border: 1px solid #4d4d4d;
    }
  }
  & .item-info {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
