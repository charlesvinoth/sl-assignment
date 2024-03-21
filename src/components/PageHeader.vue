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
    <div>
      <slot />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #00056a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  height: 80px;

  &.dense {
    height: 50px;
  }
}
</style>
