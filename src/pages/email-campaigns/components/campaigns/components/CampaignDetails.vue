<script setup>
import CampaignDescription from './CampaignDescription.vue'
import CampaignName from './CampaignName.vue'
import CircularProgress from './CircularProgress.vue'

defineProps({
  name: {
    type: String,
    required: true
  },
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
  <div class="campaign-details">
    <CircularProgress :status="status" />

    <div>
      <CampaignName :name="name" />
      <CampaignDescription :status="status" :updated-on="updatedOn" :sequences="sequences" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.campaign-details {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
