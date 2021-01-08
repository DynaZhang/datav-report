<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{padding: '20px 0'}">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu class="sales-view-menu" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="dateFilter" size="small" style="margin-right: 10px;">
              <el-radio-button :label="0">今天</el-radio-button>
              <el-radio-button :label="1">本周</el-radio-button>
              <el-radio-button :label="2">本月</el-radio-button>
              <el-radio-button :label="3">今年</el-radio-button>
            </el-radio-group>
            <el-date-picker v-model="dateRange" class="sales-view-date-picker" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" unlink-panels :picker-options="pickerOption" />
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart class="chart" :options="getChartOptions()" />
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-wrapper">
              <div class="list-item" v-for="item in orderRank" :key="item.no">
                <div :class="['list-item-no', item.no <= 3 ? 'top-no' : '' ]">{{item.no}}</div>
                <div class="list-item-name">{{item.name}}</div>
                <div class="list-item-money">{{item.money}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
import commonDataMixin from "@/mixins/commonDataMixin";

export default {
  name: "SalesView",
  mixins: [commonDataMixin],
  data() {
    return {
      activeIndex: '1',
      dateFilter: 3,
      dateRange: [],
      pickerOption: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      }
    }
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index
    },
    getChartOptions () {
      return {
        color: ['#3398DB'],
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 15
        },
        xAxis: {
          type: 'category',
          data: this.orderFullYearAxis,
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            name: 'sales',
            type: 'bar',
            data: this.orderFullYear,
            barWidth: '35%',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            }
          }
        ],
        tooltip: {
          formatter: (params) => {
            return `${params.seriesName}<br />${params.marker}${params.name}:${params.value}`
          }
        },
        grid: {
          top: 70,
          right: 60,
          bottom: 60,
          left: 50
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/mixin";
@import "../../assets/styles/base";
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    display: flex;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .chart {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales-view-title {
        margin-bottom: 20px;
        font-size: $font-size4;
        color: $gray2;
        font-weight: 500;
      }
      .list-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: $font-size4;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: $gray1;
            &.top-no {
              background-color: #000;
              color: #fff;
              border-radius: 50%;
              font-weight: 500;
            }
          }
          .list-item-name {
            flex: 1;
            margin-left: 10px;
            color: $gray1;
          }
          .list-item-money {

          }
        }
      }
    }
  }
}
</style>
