<template>
  <common-card title="今日交易用户数" :value="orderUser">
    <v-chart :options="getChartOptions()" />
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">{{returnRate}}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from "@/mixins/commonDataMixin";
export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getChartOptions () {
      return {
        color: ['#3398DB'],
        legend: {
          data: ['bar']
        },
        xAxis: {
          type: 'category',
          data: this.orderUserTrendAxis,
          show: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'bar',
            data: this.orderUserTrend,
            barWidth: '60%'
          }
        ],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        tooltip: {
          formatter: (params) => {
            return `${params.seriesName}<br />${params.marker}${params.name}:${params.value}`
          }
        }
      }
    }
  }
}
</script>
