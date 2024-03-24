<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Array, Boolean],
    required: true
  },
  value: {
    type: [String, null],
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="model" type="checkbox" :value="value" />
</template>

<style lang="scss" scoped>
input[type='checkbox'] {
  display: grid;
  place-content: center;
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  border: 1px solid #dadce0;
  border-radius: 3px;
  background-color: white;
  width: 16px;
  height: 16px;

  &::before {
    transform: scale(0);
    content: '\2714';
    color: white;
    font-size: 12px;
  }

  &:checked {
    border-color: $primary-1;
    background-color: $primary-1;

    &::before {
      transform: scale(1);
    }
  }
}
</style>
