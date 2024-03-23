<script setup>
import { computed, ref } from 'vue'
import MainLayout from '@/layouts/main/MainLayout.vue'
import campaignData from './campaignData'
import Campaigns from './components/campaigns/Campaigns.vue'
import Header from './components/header/Header.vue'

const searchInput = ref('')

const campaigns = computed(() => {
  if (!searchInput.value) {
    return campaignData
  }

  return campaignData.filter((data) =>
    data.name.toLowerCase().includes(searchInput.value.toLowerCase())
  )
})
</script>

<template>
  <MainLayout>
    <Header v-model="searchInput" />
    <Campaigns :campaigns="campaigns" />
  </MainLayout>
</template>

<style lang="scss" scoped></style>
