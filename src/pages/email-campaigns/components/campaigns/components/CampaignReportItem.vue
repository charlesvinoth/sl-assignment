<script setup>
import { computed } from 'vue'
import getStatColor from '../utils/getStatColor'

const props = defineProps({
  status: {
    type: String,
    default: ''
  },
  stat: {
    type: Number,
    required: true
  },
  statPercentage: {
    type: [Number, null],
    default: null
  },
  statLabel: {
    type: String,
    required: true
  }
})

const style = computed(() => {
  if (props.status === 'Drafted') {
    return
  }

  const color = getStatColor(props.statLabel)
  return { color: `var(--${color})` }
})

const showWarningIcon = computed(
  () => !props.stat && props.statLabel !== 'Sent' && props.statLabel !== 'Positive Reply'
)
const showInfoIcon = computed(() => props.statLabel === 'Positive Reply')
</script>

<template>
  <div class="campaign-report-item">
    <div class="stat" :style="style">
      {{ stat }}

      <span v-if="props.statLabel !== 'Sent'" class="percentage">
        {{ statPercentage || '0.0' }}%
      </span>
    </div>

    <div class="label">
      {{ statLabel }}

      <img v-if="showWarningIcon" src="@/assets/icons/warning.svg" alt="warning icon" />
      <span v-if="showInfoIcon" class="info" :class="status === 'Drafted' ? 'filled' : 'outlined'">
        i
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.campaign-report-item {
  .stat {
    margin-bottom: 8px;
    height: 26px;
    color: rgba(40, 43, 66, 0.6);
    font-weight: 500;
    font-size: 20px;

    .percentage {
      color: rgba(40, 43, 66, 0.6);
      font-size: 12px;
    }
  }

  .label {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    color: rgba(40, 43, 66, 0.6);
    font-size: 14px;

    img {
      margin-bottom: 3px;
      width: 12px;
      height: 10px;
    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2px;
      border-radius: 100%;
      width: 12px;
      height: 12px;
      font-size: 8px;

      &.filled {
        background-color: #abacc6;
        color: white;
      }

      &.outlined {
        border: 1px solid #abacc6;
        color: #abacc6;
      }
    }
  }
}
</style>
