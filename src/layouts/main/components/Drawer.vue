<script setup>
import { useRoute, useRouter } from 'vue-router'
import AllLeadsIcon from './AllLeadsIcon.vue'
import EmailCampaignIcon from './EmailCampaignIcon.vue'
import MasterInboxIcon from './MasterInboxIcon.vue'

const routes = [
  {
    label: 'All Leads',
    name: 'allLeads',
    icon: AllLeadsIcon
  },
  {
    label: 'Master Inbox',
    name: 'masterInbox',
    icon: MasterInboxIcon
  },
  {
    label: 'Email Campaigns',
    name: 'emailCampaigns',
    icon: EmailCampaignIcon
  }
]
const links = [
  {
    icon: require('@/assets/icons/community.svg'),
    label: 'Join Slack Community'
  },
  {
    icon: require('@/assets/icons/tutorial.svg'),
    label: 'Smartlead Tutorials'
  }
]

const route = useRoute()
const router = useRouter()
const goto = (routeName) => router.push({ name: routeName })
const openLink = () => window.open('https://www.smartlead.ai/', '_blank')
</script>

<template>
  <aside class="drawer">
    <nav>
      <ul>
        <li
          v-for="_route in routes"
          :key="_route.name"
          :class="{ active: route.name === _route.name }"
          @click="goto(_route.name)"
        >
          <div class="icon-wrapper">
            <component :is="_route.icon" class="icon" />
          </div>
          {{ _route.label }}
        </li>
      </ul>
    </nav>

    <nav class="links">
      <ul>
        <li v-for="link in links" :key="link.label" @click="openLink">
          <img :src="link.icon" :alt="link.label" />
          {{ link.label }}
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.drawer {
  display: flex;
  position: fixed;
  top: 50px;
  left: 0;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #e1e2ef;
  background-color: white;
  padding: 10px 4px 10px 0;
  width: 230px;
  height: calc(100vh - 50px);

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      margin-bottom: 8px;
      padding: 0px 16px;
      height: 40px;
      font-size: 14px;

      .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        background-color: #e1e3ef;
        width: 20px;
        height: 20px;

        .icon {
          width: 14px;
          height: 14px;
          color: #a9abc1;
        }
      }

      &.active {
        position: relative;
        background-color: rgba(117, 122, 233, 0.1);

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          background-color: var(--primary-1);
          width: 3px;
          height: 100%;
          content: '';
        }

        .icon-wrapper {
          background-color: var(--primary-1);

          .icon {
            color: white;
          }
        }
      }
    }
  }

  .links {
    position: relative;

    &::before {
      position: absolute;
      top: -24px;
      left: calc(50% - 25px);
      border: none;
      background-color: #e1e3ef;
      padding: 0;
      width: 50px;
      height: 2px;
      content: '';
    }
  }
}
</style>
