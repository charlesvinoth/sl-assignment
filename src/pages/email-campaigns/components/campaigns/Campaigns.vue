<script setup></script>

<template>
  <div class="campaigns">
    <table>
      <thead>
        <tr>
          <th style="width: 32px">
            <input id="" type="checkbox" name="" />
          </th>
          <th>Campaign Details</th>
          <th>Report</th>
          <th />
          <th />
          <th />
          <th />
          <th />
        </tr>
      </thead>

      <tbody>
        <tr v-for="n in 5" :key="n">
          <td>
            <input id="" type="checkbox" name="" />
          </td>
          <td v-for="m in 7" :key="m" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.campaigns {
  padding: 0px 16px;

  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;

    tr {
      border-bottom: 3px solid #f7f8fe;
    }

    thead {
      background-color: #e9ebf9;

      th {
        padding: 15px 8px;
        color: var(--gray-3);
        font-weight: 700;
        line-height: 20px;
      }
    }

    tbody {
      td {
        background-color: white;
        padding: 36px 8px;
      }
    }
  }
}
</style>
