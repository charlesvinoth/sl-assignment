<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <label :for="label">{{ label }}</label>
</template>

<style lang="scss" scoped>
label {
  color: var(--gray-2);
  font-size: 14px;
  line-height: 24px;
}
</style>
