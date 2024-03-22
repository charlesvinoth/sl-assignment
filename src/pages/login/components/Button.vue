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
  transition-duration: 150ms;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-2);
  width: 100%;
  height: 40px;
  color: white;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;

  &:hover {
    opacity: 0.9;
  }

  &.disabled {
    background-color: #edeef8;
    pointer-events: none;
    color: #a9abc1;
  }
}
</style>
