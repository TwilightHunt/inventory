<template>
  <div v-on-click-outside="close" class="item-info" ref="panel">
    <Cross @click="close" />
    <div class="item-info__image">
      <img :src="element?.item?.image" alt="" />
    </div>
    <div class="hr"></div>
    <div class="item-info__content">
      <div class="item-info__content__header">
        <div class="stub-md"></div>
      </div>
      <div class="item-info__content__description">
        <div v-for="stub in 2" class="stub"></div>
      </div>
      <div ref="amount" class="item-info__content__amount">
        <common-input
          v-if="element?.amount !== undefined"
          v-maska:[options]
          data-maska="###"
          placeholder="Введите количество"
          v-model="itemAmount"
        />
        <div class="item-info__content__amount__buttons">
          <button @click="toggleEditAmountModal" class="button">Отмена</button>
          <button @click="editElementAmount" class="button button-danger">
            Подтвердить
          </button>
        </div>
      </div>
    </div>
    <div class="hr"></div>
    <div class="item-info__navigation">
      <button @click="toggleEditAmountModal" class="button">
        Редактировать количество
      </button>
      <button
        @click="
          clearElement(element.coordinates.i, element.coordinates.j);
          close();
        "
        class="button button-danger"
      >
        Удалить предмет
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import Cross from "@/components/icons/Cross.vue";
import CommonInput from "@/components/ui/input.vue";
import { Element } from "@/utils/types/element.ts";
import { useElementsStore } from "@/stores/elements";

const { editElement, clearElement } = useElementsStore();

interface ItemInfoProps {
  element: Element;
}

const props = defineProps<ItemInfoProps>();

const panel = ref();
const amount = ref();
const itemAmount = ref(0);

const close = () => {
  panel.value.classList.remove("show");
  amount.value.classList.remove("show");
};

const toggleEditAmountModal = () => {
  amount.value.classList.toggle("show");
};

const editElementAmount = () => {
  if (itemAmount.value) {
    editElement({ ...props.element.coordinates }, { amount: itemAmount.value });
  } else {
    itemAmount.value = props.element.amount || 0;
  }
  amount.value.classList.remove("show");
};

watch(props, () => {
  itemAmount.value = props.element.amount || 0;
});

const options = {
  postProcess: (val: string) => val.replace(/^0+/, ""),
};
</script>

<style lang="scss" scoped>
.item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(#262626, 0.9);
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
    &__amount {
      padding: 2rem 2.1rem;
      border: 1px solid $primary-border;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(#262626, 0.95);
      backdrop-filter: blur(5px) opacity(0.9);
      transform: translateY(100%);
      transition: 0.3s ease;
      & input {
        margin-bottom: 2rem;
        font-weight: 500;
      }
      &__buttons {
        display: flex;
        column-gap: 1rem;
        & .button {
          flex-grow: 1;
        }
      }
      &.show {
        transform: translateY(0);
      }
    }
  }
  &__navigation {
    width: 100%;
    & .button {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
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
