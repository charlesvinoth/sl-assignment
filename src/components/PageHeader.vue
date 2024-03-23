<script setup>
import Logo from './Logo.vue'

defineProps({
  isDense: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <header :class="{ dense: isDense }">
    <Logo />
    <slot />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: #00056a;
  padding: 0rem 1rem;
  height: 80px;

  &.dense {
    height: 50px;
  }
}
</style>
