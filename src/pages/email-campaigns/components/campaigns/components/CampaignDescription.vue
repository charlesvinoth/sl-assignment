<script setup>
import { computed } from 'vue'
import getStatusColor from '../utils/getStatusColor'

const props = defineProps({
  status: {
    type: String,
    required: true
  },
  updatedOn: {
    type: String,
    required: true
  },
  sequences: {
    type: Number,
    required: true
  }
})

const style = computed(() => {
  const bgColor = getStatusColor(props.status)

  return {
    backgroundColor: bgColor ? `var(--${bgColor})` : '#B7BBD4'
  }
})
</script>

<template>
  <p class="campaign-description">
    <span class="dot" :style="style" />
    <span>{{ status }} on {{ updatedOn }}</span>
    <span class="divider" />
    <span>{{ sequences }} Sequences</span>
  </p>
</template>

<style lang="scss" scoped>
.campaign-description {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: rgba(40, 43, 66, 0.6);
  font-size: 14px;

  .dot {
    border-radius: 100%;
    width: 6px;
    height: 6px;
  }

  .divider {
    background-color: rgba(150, 152, 163, 0.5);
    width: 2px;
    height: 10px;
  }
}
</style>
