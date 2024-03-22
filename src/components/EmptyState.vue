<script setup>
import Button from '@/components/Button.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="empty-state">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>

    <img src="@/assets/illustration.svg" alt="illustration" />

    <Button class="button">Add To Chrome</Button>
  </div>
</template>

<style lang="scss" scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20vh auto 0;
  width: 460px;

  h1 {
    margin: 0 0 8px;
    color: var(--gray-1);
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
  }

  p {
    margin: 0;
    color: rgba(0, 1, 21, 0.8);
    font-size: 14px;
    line-height: 24px;
    text-align: center;
  }

  img {
    margin: 44px 0;
  }

  .button {
    margin: auto;
    background-color: var(--primary-1);
    width: 196px;
  }
}
</style>
