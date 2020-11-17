<template>
  <common-card title="今日交易用户数" value="112,773">
    <v-chart :options="chartOption" />
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">5.98%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin],
  data () {
    return {
      chartOption: {
        color: ['#3398BD'],
        legend: {
          data: ['bar']
        },
        xAxis: {
          type: 'category',
          data: ['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00'],
          show: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'bar',
            data: [410,82,200,334,390,330,220,150,82,200,134,290,330,150],
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
          formatter: '{b0}<br />直接访问: {c0}'
        }
      }
    }
  }
}
</script>
