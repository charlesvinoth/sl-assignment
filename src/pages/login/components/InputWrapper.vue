<script setup></script>

<template>
  <div class="input-wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  height: 40px;
  border: 1px solid;
  border-color: var(--border);
  border-radius: 4px;
  overflow: hidden;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  gap: 16px;

  &:focus-within {
    border-color: var(--primary-1);
  }
}
</style>
