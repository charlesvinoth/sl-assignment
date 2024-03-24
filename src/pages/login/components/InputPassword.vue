<script setup>
import { ref } from 'vue'
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

const isVisible = ref(false)
</script>

<template>
  <fieldset>
    <InputLabel :label="label">
      <p class="forgot-password">Forgot Password?</p>
    </InputLabel>

    <InputWrapper>
      <input
        :name="label"
        :value="modelValue"
        :type="isVisible ? 'text' : 'password'"
        @input="emit('update:modelValue', $event.target.value)"
      />
      <p class="toggle" @click="isVisible = !isVisible">{{ isVisible ? 'Hide' : 'Show' }}</p>
    </InputWrapper>
  </fieldset>
</template>

<style lang="scss" scoped>
.forgot-password {
  margin: 0px;
  color: $primary-1;
  font-weight: 500;
  font-size: 14px;
}

.toggle {
  cursor: pointer;
  color: #686b8a;
  font-size: 14px;
  user-select: none;
}
</style>
