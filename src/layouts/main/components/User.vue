<script setup>
import { onClickOutside } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const isDropdownVisible = ref(false)
const dropdownRef = ref(null)

const name = computed(() => store.state.auth.user.name)
const email = computed(() => store.state.auth.user.email)

onClickOutside(dropdownRef, () => (isDropdownVisible.value = false))
const showDropDown = () => (isDropdownVisible.value = true)
const logout = () => router.push({ name: 'login' })
</script>

<template>
  <div class="user">
    <img
      src="@/assets/avatar.jpeg"
      alt="avatar"
      class="user-avatar"
      @mouseenter="showDropDown"
      @click="showDropDown"
    />

    <Transition>
      <div v-show="isDropdownVisible" ref="dropdownRef" class="dropdown">
        <div class="user-profile">
          <img src="@/assets/avatar.jpeg" alt="avatar" class="avatar-large" />

          <div class="user-details">
            <p class="name">{{ name }}</p>
            <p class="email">{{ email }}</p>
          </div>
        </div>

        <nav class="menu">
          <ul>
            <li @click="logout">
              <img src="@/assets/icons/logout.svg" alt="logout icon" />
              Logout
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  .user-avatar {
    border-radius: 100%;
    width: 24px;
    height: 24px;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .dropdown {
    position: absolute;
    top: 32px;
    right: 0;
    z-index: 20;
    box-shadow: 0px 2px 4px 0px rgba($color: $box-shadow, $alpha: 0.25);
    border-radius: 3px;
    background-color: white;
    width: 342px;

    .user-profile {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      border-bottom: 1px solid #f1f2f8;
      padding: 16px;

      .avatar-large {
        border-radius: 100%;
        width: 45px;
        height: 45px;
      }

      .user-details {
        flex-grow: 1;

        p {
          margin: 0;
        }

        .name {
          margin-bottom: 4px;
          color: rgba($color: $gray-1, $alpha: 0.8);
          font-weight: 500;
        }

        .email {
          color: rgba($color: $gray-1, $alpha: 0.6);
          font-size: 14px;
          text-transform: lowercase;
        }
      }
    }

    .menu {
      padding: 16px;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
