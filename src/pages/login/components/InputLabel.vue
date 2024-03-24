<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <label :for="label">
    {{ label }}
    <slot />
  </label>
</template>

<style lang="scss" scoped>
label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7a7d9c;
  font-size: 14px;
  line-height: 24px;
}
</style>
