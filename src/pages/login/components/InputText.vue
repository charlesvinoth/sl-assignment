<script setup>
import InputLabel from './InputLabel.vue'
import InputWrapper from './InputWrapper.vue'

defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <fieldset>
    <InputLabel :label="label" />
    <InputWrapper>
      <input
        :name="label"
        :value="modelValue"
        type="text"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </InputWrapper>
  </fieldset>
</template>

<style lang="scss" scoped></style>
