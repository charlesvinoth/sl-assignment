<script setup>
import vex from '@/plugins/vex'

const showPrompt = (action) => {
  vex.dialog.alert({
    message: `${action} the campaign?`
  })
}
</script>

<template>
  <div class="campaign-actions">
    <button class="action" @click="showPrompt('Pause')">
      <img src="@/assets/icons/paused.svg" alt="pause icon" />
    </button>

    <button class="action" @click="showPrompt('Edit')">
      <img src="@/assets/icons/edit.svg" alt="edit icon" />
    </button>

    <button class="action" @click="showPrompt('More actions on')">
      <img src="@/assets/icons/more.svg" alt="more icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.campaign-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 1px solid #e5e7f9;
    border-radius: 3px;
    background-color: #fafaff;
    width: 36px;
    height: 36px;
  }
}
</style>
