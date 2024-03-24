<script setup>
import Button from '@/components/Button.vue'
import vex from '@/plugins/vex'
import SearchInput from './SearchInput.vue'

defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const showPrompt = () => {
  vex.dialog.alert({
    message: 'Add campaign'
  })
}
</script>

<template>
  <div class="header">
    <div class="tab">All Campaigns (24)</div>

    <div class="wrapper">
      <SearchInput
        :model-value="modelValue"
        @update:model-value="(value) => emit('update:modelValue', value)"
      />
      <Button class="button" @click="showPrompt">+ Add Campaign</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid $gray-3;
  background-color: white;
  padding: 0 16px;
  height: 60px;

  .tab {
    position: relative;
    font-weight: 500;

    &::before {
      position: absolute;
      bottom: -20px;
      left: calc(50% - 20px);
      border-radius: 36px 36px 0 0;
      background-color: $primary-1;
      width: 39px;
      height: 4px;
      content: '';
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    gap: 30px;

    .button {
      width: 148px;
      height: 36px;
    }
  }
}
</style>
