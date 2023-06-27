<template>
  <div class="panel-left block">
    <div class="panel-left__image">
      <img src="@/assets/imgs/img.png" alt="" />
    </div>
    <div class="panel-left__description">
      <div class="panel-left__description__title">
        <div class="stub-md"></div>
      </div>
      <div class="panel-left__description__text">
        <div class="stub"></div>
        <div class="stub"></div>
        <div class="stub"></div>
        <div class="stub"></div>
        <div class="stub"></div>
        <div class="stub"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.panel-left {
  padding: 1.125rem 0.875rem;
  &__description {
    margin-top: 1.25rem;
    &__title {
      & .stub-md {
        width: 190px;
        margin: auto;
      }
    }
    &__text {
      & .stub {
        margin: auto;
        &:first-child {
          width: 155px;
          margin-top: 24px;
        }
        &:nth-child(2) {
          width: 190px;
        }
        &:nth-child(3) {
          width: 170px;
        }
        &:nth-child(4) {
          width: 160px;
        }
        &:nth-child(5) {
          width: 140px;
          margin-bottom: 24px !important;
        }
        &:nth-child(6) {
          width: 80px;
        }
        &:not(:last-child) {
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>
