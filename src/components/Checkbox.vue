<script setup></script>

<template>
  <input type="checkbox" />
</template>

<style lang="scss" scoped>
input[type='checkbox'] {
  display: grid;
  place-content: center;
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  border: 1px solid #dadce0;
  border-radius: 4px;
  background-color: white;
  width: 16px;
  height: 16px;

  &::before {
    transform: scale(0);
    content: '\2714';
    color: white;
    font-size: 12px;
  }

  &:checked {
    border-color: var(--primary-1);
    background-color: var(--primary-1);

    &::before {
      transform: scale(1);
    }
  }
}
</style>
