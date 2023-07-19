<template>
  <input
    class="input"
    :type="type"
    pattern="[0-9]"
    :placeholder="placeholder"
    @input="onInput"
    :value="modelValue"
  />
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  placeholder: String,
  type: { type: String, default: "text" },
  modelValue: String,
});

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style lang="scss" scoped>
.input {
  padding: 1.2rem;
  border-radius: 0.4rem;
  border: 0.1rem solid $primary-border;
  background: $secondary-bg;
  font-size: 1.4rem;
  color: #fff;
  opacity: 0.4;
  width: 100%;
  box-sizing: border-box;
}
</style>
