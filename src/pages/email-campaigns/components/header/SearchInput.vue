<script setup></script>

<template>
  <div class="search-input">
    <img src="@/assets/icons/search.svg" alt="search icon" />
    <input type="text" placeholder="Search Campaigns" />
  </div>
</template>

<style lang="scss" scoped>
.search-input {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #e5e7f9;
  border-radius: 3px;
  background-color: #fafaff;
  padding: 0px 12px;
  width: 264px;
  height: 36px;

  input {
    font-size: 14px;
  }

  ::placeholder {
    color: #9699b0;
  }
}
</style>
