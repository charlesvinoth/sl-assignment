<script setup>
import Toolbar from '@/components/Toolbar.vue'
import Drawer from './components/Drawer.vue'
import License from './components/License.vue'
import User from './components/User.vue'
</script>

<template>
  <div class="main-layout">
    <Toolbar is-dense class="toolbar">
      <div class="toolbar-items">
        <License />

        <img src="@/assets/icons/help.svg" alt="help icon" />
        <img src="@/assets/icons/gifts.svg" alt="gifts icon" />

        <User />
      </div>
    </Toolbar>

    <Drawer />

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  .toolbar {
    position: fixed;
    z-index: 10;
    inset: 0;

    .toolbar-items {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  .content {
    margin-top: 50px;
    margin-left: 230px;
  }
}
</style>
