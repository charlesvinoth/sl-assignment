<script setup>
defineProps({
  isDisabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button type="submit" :class="{ disabled: isDisabled }">Sign In</button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  background-color: var(--primary-2);
  outline: none;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  color: white;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    opacity: 0.9;
  }

  &.disabled {
    pointer-events: none;
    background-color: #edeef8;
    color: #a9abc1;
  }
}
</style>
