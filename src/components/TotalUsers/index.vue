<template>
  <common-card title="累计用户数" :value="reportData.userToday">
    <v-chart :options="chartOption" />
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比 </span>
        <span class="emphasis">{{reportData.userGrowthLastDay}}%</span>
        <div class="icon increase" />
        <span class="month">月同比 </span>
        <span class="emphasis">{{reportData.userGrowthLastMonth}}%</span>
        <div class="icon decrease" />
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from "@/mixins/commonDataMixin";
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin, commonDataMixin],
  data () {
    return {
      chartOption: {
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        tooltip: {},
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            stack: '总量',
            data: [200],
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            stack: '总量',
            data: [250],
            itemStyle: {
              color: '#eeeeee'
            }
          },
          {
            type: 'custom',
            data: [200],
            stack: '总量',
            renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value,0])
              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M531.2 354.133333l281.6 281.6c10.666667 10.666667 14.933333 21.333333 10.666667 27.733334-4.266667 8.533333-12.8 12.8-27.733334 12.8h-569.6c-14.933333 0-25.6-4.266667-27.733333-12.8-4.266667-8.533333 0-17.066667 10.666667-27.733334l281.6-281.6c4.266667-4.266667 12.8-8.533333 19.2-8.533333s17.066667 4.266667 21.333333 8.533333z',
                      x: -10,
                      y: 3,
                      width: 20,
                      height: 20,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M128 320.001l383.744 383.744 383.744-383.744h-767.488z',
                      x: -10,
                      y: -23,
                      width: 20,
                      height: 20,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  }
                ],
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
