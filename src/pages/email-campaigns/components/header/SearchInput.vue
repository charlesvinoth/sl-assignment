<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="search-input">
    <img src="@/assets/icons/search.svg" alt="search icon" />
    <input
      :value="modelValue"
      type="text"
      placeholder="Search Campaigns"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-input {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid $gray-4;
  border-radius: 3px;
  background-color: $gray-5;
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
