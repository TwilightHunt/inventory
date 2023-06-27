<template>
  <div class="inventory">
    <div class="inventory__body">
      <LeftPanel />
      <InventoryGrid />
    </div>
    <footer class="inventory__footer">
      <BottomPanel />
    </footer>
  </div>
</template>

<script setup>
import LeftPanel from "./LeftPanel.vue";
import InventoryGrid from "./grid/InventoryGrid.vue";
import BottomPanel from "./BottomPanel.vue";
</script>

<style lang="scss" scoped>
.inventory {
  &__body {
    display: flex;
    column-gap: 24px;
    margin-bottom: 24px;
  }
}
</style>
