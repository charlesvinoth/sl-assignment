<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="campaign-name">
    {{ name }}
    <img src="@/assets/icons/newtab.svg" alt="open icon" />
  </h1>
</template>

<style lang="scss" scoped>
.campaign-name {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  margin-bottom: 8px;
  color: $primary-2;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
}
</style>
