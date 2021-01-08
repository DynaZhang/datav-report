<template>
  <common-card title="累计订单量" :value="orderToday">
    <v-chart :options="getChartOptions()" />
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">{{orderLastDay}}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from "@/mixins/commonDataMixin";
export default {
  name: 'TotalOrders',
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getChartOptions () {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false,
          data: this.orderFullYearAxis
        },
        yAxis: {
          show: false
        },
        tooltip: {},
        series: [
          {
            type: 'line',
            data: this.orderFullYear,
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    }
  }
}
</script>

