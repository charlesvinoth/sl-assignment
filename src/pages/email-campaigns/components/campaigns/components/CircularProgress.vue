<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    default: ''
  }
})

const getStatusIcon = computed(() => {
  switch (props.status) {
    case 'Drafted':
      return require('@/assets/icons/drafted.svg')
    case 'Stopped':
      return require('@/assets/icons/stopped.svg')
    case 'Paused':
      return require('@/assets/icons/paused.svg')
    default:
      return ''
  }
})
</script>

<template>
  <div class="circle outer" :class="status.toLowerCase()">
    <div class="circle inner">
      <img v-if="status !== 'Sent'" :src="getStatusIcon" :alt="status" />
      <span v-else>30%</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}

.outer {
  background: conic-gradient(#e5e8f7, #e5e8f7);
  width: 46px;
  height: 46px;

  &.sent {
    background: conic-gradient($positive-1 90deg, #e5e8f7 0deg);
  }

  &.drafted {
    background: conic-gradient(#e5e8f7, #e5e8f7);
  }

  &.paused {
    background: conic-gradient($warning-1 90deg, #e5e8f7 0deg);
  }

  &.stopped {
    background: conic-gradient($negative-1 90deg, #e5e8f7 0deg);
  }
}

.inner {
  background-color: white;
  width: 36px;
  height: 36px;
  font-size: 12px;
}
</style>
