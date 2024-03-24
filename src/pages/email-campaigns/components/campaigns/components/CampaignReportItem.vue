<script setup>
import { computed } from 'vue'
// import getStatColor from '../utils/getStatColor'

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

const countClass = computed(() => {
  if (props.status === 'Drafted') {
    return 'drafted'
  }

  if (props.statLabel === 'Positive Reply') {
    return 'positive'
  }

  return props.statLabel.toLowerCase()
})

const showWarningIcon = computed(
  () =>
    props.status === 'Drafted' && props.statLabel !== 'Sent' && props.statLabel !== 'Positive Reply'
)
const showInfoIcon = computed(() => props.statLabel === 'Positive Reply')
</script>

<template>
  <div class="campaign-report-item">
    <div class="stat">
      <span class="count" :class="countClass">{{ stat }}</span>

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
  color: rgba($color: $gray-2, $alpha: 0.6);

  .stat {
    margin-bottom: 8px;
    height: 26px;
    font-size: 20px;

    .count {
      margin-right: 4px;
      font-weight: 500;

      &.drafted {
        color: #999ba8;
      }

      &.sent {
        color: $primary-2;
      }

      &.clicked {
        color: $warning-2;
      }

      &.opened {
        color: $purple-1;
      }

      &.replied {
        color: $cyan-1;
      }

      &.positive {
        color: $positive-1;
      }
    }

    .percentage {
      font-size: 12px;
    }
  }

  .label {
    display: flex;
    align-items: flex-end;
    gap: 4px;
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
