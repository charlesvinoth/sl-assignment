<script setup>
import { ref, watch } from 'vue'
import Checkbox from '@/components/Checkbox.vue'
import CampaignActions from './components/CampaignActions.vue'
import CampaignDetails from './components/CampaignDetails.vue'
import CampaignReportItem from './components/CampaignReportItem.vue'

const props = defineProps({
  campaigns: {
    type: Array,
    required: true
  }
})

const isAllSelected = ref(false)
const selectedRows = ref([])

watch(
  selectedRows,
  () => (isAllSelected.value = selectedRows.value.length === props.campaigns.length)
)

const selectAll = (value) =>
  (selectedRows.value = value ? props.campaigns.map((campaign) => campaign.name) : [])
</script>

<template>
  <div class="campaigns">
    <table>
      <thead>
        <tr>
          <th style="width: 32px">
            <Checkbox :model-value="isAllSelected" @update:model-value="selectAll" />
          </th>
          <th>Campaign Details</th>
          <th colspan="5">Report</th>
          <th style="width: 148px" />
        </tr>
      </thead>

      <tbody>
        <template v-if="campaigns.length">
          <tr v-for="campaign in campaigns" :key="campaign.id">
            <td>
              <Checkbox v-model="selectedRows" :value="campaign.name" />
            </td>
            <td>
              <CampaignDetails
                :name="campaign.name"
                :status="campaign.status"
                :updated-on="campaign.updatedOn"
                :sequences="campaign.sequences"
              />
            </td>
            <td>
              <CampaignReportItem
                :status="campaign.status"
                :stat="campaign.sent"
                stat-label="Sent"
              />
            </td>
            <td>
              <CampaignReportItem
                :status="campaign.status"
                :stat="campaign.clicked[0]"
                :stat-percentage="campaign.clicked[1]"
                stat-label="Clicked"
              />
            </td>
            <td>
              <CampaignReportItem
                :status="campaign.status"
                :stat="campaign.opened[0]"
                :stat-percentage="campaign.opened[1]"
                stat-label="Opened"
              />
            </td>
            <td>
              <CampaignReportItem
                :status="campaign.status"
                :stat="campaign.replied[0]"
                :stat-percentage="campaign.replied[1]"
                stat-label="Replied"
              />
            </td>
            <td>
              <CampaignReportItem
                :status="campaign.status"
                :stat="campaign.positiveReply[0]"
                :stat-percentage="campaign.positiveReply[1]"
                stat-label="Positive Reply"
              />
            </td>
            <td>
              <CampaignActions />
            </td>
          </tr>
        </template>

        <tr v-else>
          <td colspan="8">
            <p class="no-data">No campaigns found</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.campaigns {
  padding: 0px 16px;

  .no-data {
    font-size: 14px;
    text-align: center;
  }

  table {
    border-collapse: collapse;
    width: 100%;

    tr {
      border-bottom: 3px solid $gray-6;
    }

    thead {
      background-color: #e9ebf9;

      th {
        margin: 0;
        padding: 15px 8px;
        color: #686b8a;
        font-weight: 700;
        line-height: 20px;
        text-align: left;
      }
    }

    tbody {
      td {
        background-color: white;
        padding: 18.5px 8px;
      }
    }
  }
}
</style>
