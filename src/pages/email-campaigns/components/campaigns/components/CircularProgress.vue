<script setup>
import { computed } from 'vue'
import getStatusColor from '../utils/getStatusColor'

const props = defineProps({
  status: {
    type: String,
    default: ''
  }
})

const style = computed(() => {
  const bgColor = getStatusColor(props.status)
  const _bgColor = bgColor ? `var(--${bgColor})` : '#e5e8f7'

  return {
    background: `conic-gradient(${_bgColor} 90deg, #e5e8f7 0deg)`
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
  <div class="circle outer" :style="style">
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
  width: 46px;
  height: 46px;
}

.inner {
  background-color: white;
  width: 36px;
  height: 36px;
  font-size: 12px;
}
</style>
