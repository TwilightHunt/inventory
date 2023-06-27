<template>
  <div class="inventory-grid block">
    <table class="inventory-grid__table">
      <tr class="inventory-grid__table__tr" v-for="row in rows">
        <th class="inventory-grid__table__th" v-for="column in columns">
          <GridEement />
        </th>
      </tr>
    </table>
  </div>
</template>

<script setup>
import GridEement from "./GridElement.vue";
const rows = 5;
const columns = 5;
</script>

<style lang="scss" scoped>
.inventory-grid {
  //border-color: transparent;
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
