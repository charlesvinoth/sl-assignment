<script setup>
defineProps({
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
</script>

<template>
  <p class="campaign-description">
    <span class="dot" :class="status.toLowerCase()" />
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
  color: rgba($color: $gray-2, $alpha: 0.6);
  font-size: 14px;

  .dot {
    border-radius: 100%;
    width: 6px;
    height: 6px;

    &.sent {
      background: $positive-1;
    }

    &.drafted {
      background: #b7bbd4;
    }

    &.paused {
      background: $warning-1;
    }

    &.stopped {
      background: $negative-1;
    }
  }

  .divider {
    background-color: rgba(150, 152, 163, 0.5);
    width: 2px;
    height: 10px;
  }
}
</style>
