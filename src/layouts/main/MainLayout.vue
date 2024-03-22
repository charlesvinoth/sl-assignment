<script setup>
import PageHeader from '@/components/PageHeader.vue'
import Drawer from './components/Drawer.vue'
import License from './components/License.vue'
import User from './components/User.vue'
</script>

<template>
  <div class="main-layout">
    <PageHeader is-dense class="page-header">
      <div class="toolbar-items">
        <License />

        <img src="@/assets/icons/help.svg" alt="help icon" />
        <img src="@/assets/icons/gifts.svg" alt="gifts icon" />

        <User />
      </div>
    </PageHeader>

    <Drawer />

    <main class="page-content">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  .page-header {
    position: fixed;
    inset: 0;

    .toolbar-items {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  .page-content {
    margin-top: 50px;
    margin-left: 230px;
  }
}
</style>
