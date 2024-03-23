<script setup></script>

<template>
  <div class="campaign-actions">
    <div class="action">
      <img src="@/assets/icons/paused.svg" alt="pause icon" />
    </div>
    <div class="action">
      <img src="@/assets/icons/edit.svg" alt="edit icon" />
    </div>
    <div class="action">
      <img src="@/assets/icons/more.svg" alt="more icon" />
    </div>
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
    border: 1px solid #e5e7f9;
    border-radius: 3px;
    background-color: #fafaff;
    width: 36px;
    height: 36px;
  }
}
</style>
