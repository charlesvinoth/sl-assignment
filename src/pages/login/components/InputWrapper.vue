<script setup></script>

<template>
  <div class="input-wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid;
  border-color: var(--border);
  border-radius: 4px;
  padding: 0px 10px;
  height: 40px;
  overflow: hidden;

  &:focus-within {
    border-color: var(--primary-1);
  }
}
</style>
