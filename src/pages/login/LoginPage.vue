<script setup>
import { computed, onMounted, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Button from '@/components/Button.vue'
import PageHeader from '@/components/PageHeader.vue'
import InputPassword from './components/InputPassword.vue'
import InputText from './components/InputText.vue'

const store = useStore()
const router = useRouter()

const state = reactive({
  email: 'charles.vinoth@example.com',
  password: 'smart@123'
})

const isButtonDisabled = computed(() => !state.email || !state.password)
const isAuthenticated = computed(() => store.getters.isAuthenticated)

watch(isAuthenticated, () => {
  if (isAuthenticated.value) {
    router.push({ name: 'allLeads' })
  }
})

onMounted(() => store.dispatch('logout'))

function handleSubmit(e) {
  e.preventDefault()
  store.dispatch('login', { email: state.email, password: state.password })
}
</script>

<template>
  <main>
    <PageHeader />

    <div class="form-wrapper">
      <h1 class="form-title">Welcome to Smartlead.ai</h1>
      <p class="form-subtitle">Log in to your account</p>

      <form class="form" @submit="handleSubmit">
        <InputText v-model="state.email" label="Email" />
        <InputPassword v-model="state.password" label="Password" class="field" />
        <Button :is-disabled="isButtonDisabled">Sign In</Button>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.form-wrapper {
  margin: 64px auto 0px;
  box-shadow: 0px 2px 4px 0px rgba(141, 143, 169, 0.25);
  border-radius: 4px;
  background-color: white;
  padding: 60px;
  width: 545px;
  color: var(--gray-1);

  .form-title,
  .form-subtitle {
    text-align: center;
  }

  .form-title {
    margin: 0px 0px 8px 0px;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .form-subtitle {
    margin: 0px;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .form {
    margin-top: 16px;

    .field {
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }
}
</style>
