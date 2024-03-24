<script setup></script>

<template>
  <div class="license">
    <img src="@/assets/icons/star.svg" alt="star icon" class="icon" />
    <p class="label">Trail expires in 12 days</p>
  </div>
</template>

<style lang="scss" scoped>
.license {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 46px;
  background-color: rgba($color: white, $alpha: 0.2);
  padding: 7px 12px;
  height: 30px;

  .icon {
    height: 16px;
  }

  .label {
    margin: 0;
    color: rgba($color: white, $alpha: 0.8);
    font-size: 12px;
  }
}
</style>
