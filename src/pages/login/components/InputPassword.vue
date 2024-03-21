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
    <div class="label-container">
      <InputLabel :label="label" />
      <p class="forgot-password">Forgot Password?</p>
    </div>
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
.label-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .forgot-password {
    margin: 0px;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-1);
  }
}

.toggle {
  font-size: 14px;
  color: var(--gray-3);
  cursor: pointer;
  user-select: none;
}
</style>
