<template>
  <div class="item-info" ref="panel">
    <Cross @click="close" />
    <div class="item-info__image">
      <img :src="props?.element?.item?.image" alt="" />
    </div>
    <div class="hr"></div>
    <div class="item-info__content">
      <div class="item-info__content__header">
        <div class="stub-md"></div>
      </div>
      <div class="item-info__content__description">
        <div v-for="stub in 5" class="stub"></div>
      </div>
    </div>
    <div class="hr"></div>
    <div class="item-info__navigation">
      <button class="button button-danger">Удалить предмет</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Cross from "@/components/icons/Cross.vue";
const panel = ref();

const props = defineProps({
  element: { type: Object, required: true },
});

const close = () => {
  panel.value.classList.remove("show");
};
</script>

<style lang="scss" scoped>
.item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(#262626, 0.5);
  backdrop-filter: blur(5px) opacity(0.8);
  width: 250px;
  border-left: 1px solid #4d4d4d;
  padding: 19px;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform: translateX(100%);
  &.show {
    transform: translateX(0);
  }
  &__image {
    margin: 36px 0 30px 0;
    & img {
      height: 130px;
      width: 130px;
    }
  }
  &__content {
    width: 100%;
    & .stub-md {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
    & .stub {
      margin: auto;
      width: 100%;
      &:nth-child(4) {
        width: 180px;
      }
      &:nth-child(5) {
        width: 80px;
        margin-bottom: 24px !important;
      }
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
  &__navigation {
    margin-top: 18px;
    width: 100%;
    & .button {
      width: 100%;
    }
  }
  & .cross {
    top: 14px;
    right: 14px;
    position: absolute;
    cursor: pointer;
  }
}
</style>
