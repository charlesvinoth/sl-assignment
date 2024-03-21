<script setup>
import { computed, reactive } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from './components/Button.vue'
import InputPassword from './components/InputPassword.vue'
import InputText from './components/InputText.vue'

const state = reactive({
  email: '',
  password: ''
})

const isButtonDisabled = computed(() => !state.email || !state.password)
</script>

<template>
  <main>
    <PageHeader />

    <div class="form-card">
      <h1>Welcome to Smartlead.ai</h1>
      <p>Log in to your account</p>

      <form>
        <InputText v-model="state.email" label="Email" />
        <InputPassword v-model="state.password" label="Password" class="space" />
        <Button :is-disabled="isButtonDisabled" />
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.form-card {
  background-color: white;
  border-radius: 4px;
  padding: 60px;
  margin: 64px auto 0px;
  width: 540px;
  color: var(--gray-1);
  box-shadow: 0px 2px 4px 0px rgba(141, 143, 169, 0.25);

  h1,
  p {
    text-align: center;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    margin: 0px 0px 8px 0px;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0px;
  }

  form {
    margin-top: 16px;

    .space {
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }
}
</style>
