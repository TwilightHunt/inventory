<template>
  <div class="bottom-panel block">
    <div class="bottom-panel__body">
      <div class="stub-lg"></div>
    </div>
    <Cross />
  </div>
</template>

<script setup>
import Cross from ".././icons/cross.vue";
</script>

<style lang="scss" scoped>
.bottom-panel {
  padding: 18px;
  padding-right: 68px;
  position: relative;
  &__body {
    & .stub-lg {
      width: 100%;
    }
  }
  .cross {
    position: absolute;
    top: 14px;
    right: 14px;
  }
}
</style>
