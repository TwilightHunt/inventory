<template>
  <div class="grid-element">
    <img
      v-if="props.element.item"
      :src="props.element.item.image"
      alt=""
      class="grid-element__image"
    />
    <div class="grid-element__amount" v-if="props.element.item">
      {{ props.element.amount }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  element: Object,
});
</script>

<style lang="scss" scoped>
.grid-element {
  width: 105px;
  height: 100px;
  border-radius: 0;
  position: relative;
  &__amount {
    position: absolute;
    bottom: -1px;
    right: -1px;
    height: 16px;
    width: 16px;
    border-top: 1px solid #4d4d4d;
    border-left: 1px solid #4d4d4d;
    border-top-left-radius: 5px;
    font-size: 0.625rem;
    color: rgba(#fff, 0.4);
    font-weight: 500;
    line-height: 150%;
  }
  &__image {
    position: absolute;
    inset: 0;
    margin: auto;
  }
}
</style>
