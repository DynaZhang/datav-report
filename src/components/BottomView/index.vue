<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">关键词搜索</div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,364</div>
                <v-chart :options="searchUserOption" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">198,872</div>
                <v-chart :options="searchNumberOption" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" width="180"/>
                <el-table-column prop="keyword"  label="关键词" width="180"/>
                <el-table-column prop="count" label="总搜索量"/>
                <el-table-column prop="user" label="搜索用户数"/>
                <el-table-column prop="range" label="点击率"/>
              </el-table>
              <div class="page-wrapper">
                <el-pagination background layout="prev, pager, next" :page-size="4" :total="100" @current-change="handleCurrentPageChange"/>
              </div>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类" />
                <el-radio-button label="商品" />
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOption" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomView",
  data() {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 300
        },
        series: [
          {
            type: 'line',
            areaStyle: {
              color: 'rgba(95,187,255,.5)'
            },
            lineStyle: {
              color: 'rgba(95,187,255,.5)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true,
            data: [100,150,200,250,200,150,100,50,100,150]
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      },
      searchNumberOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 300
        },
        series: [
          {
            type: 'line',
            areaStyle: {
              color: 'rgba(95,187,255,.5)'
            },
            lineStyle: {
              color: 'rgba(95,187,255,.5)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true,
            data: [100,150,200,250,200,150,100,50,100,150]
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      },
      categoryOption: {},
      tableData: [
        {id: 1, rank: 1, keyword: '北京', count: 100, user: 90, range: '90%'},
        {id: 2, rank: 2, keyword: '北京', count: 100, user: 90, range: '90%'},
        {id: 3, rank: 3, keyword: '北京', count: 100, user: 90, range: '90%'},
        {id: 4, rank: 4, keyword: '北京', count: 100, user: 90, range: '90%'}
      ],
      radioSelect: ''
    }
  },
  methods: {
    handleCurrentPageChange(page) {
      console.log(page)
    },
    renderPieChart() {
      const mockData = [
        {
          legendname: '粉面粥店',
          value: 67,
          percent: '15.40%',
          itemStyle: {
            color: '#e7e702'
          },
          name: '粉面粥店 | 15.40%'
        },
        {
          legendname: '简餐便当',
          value: 97,
          percent: '22.30%',
          itemStyle: {
            color: '#8d7fec'
          },
          name: '简餐便当 | 22.30%'
        },
        {
          legendname: '汉堡披萨',
          value: 92,
          percent: '21.15%',
          itemStyle: {
            color: '#5085f2'
          },
          name: '汉堡披萨 | 21.15%'
        }
      ]
      this.categoryOption = {
        title: [
          {
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          },
          {
            text: '累计订单量',
            subtext: '320',
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            }
          }
        ],
        legend: {
          orient: 'vertical',
          data: mockData,
          top: '34.5%',
          right: '10%',
          textStyle: {
            color: '#666'
          }
        },
        series: [
          {
            type: 'pie',
            data: mockData,
            label: {
              normal: {
                show: true,
                position: 'outter',
                formatter: (params) => {
                  return params.data.legendName
                }
              }
            },
            center: ['35%', '50%'],
            radius: ['45%', '60%'],
            labelLine: {
              normal: {
                length: 10,
                length2: 5,
                smooth: true
              }
            },
            clockwise: true,
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            }
          }
        ],
        tooltip: {
          formatter: (params) => {
            return `标题<br />${params.marker}${params.data.legendname}<br />数量:${params.value}<br />占比:${params.percent}`
          }
        }
      }
    }
  },
  mounted() {
    this.renderPieChart()
  }
}
</script>

<style scoped lang="scss">
.bottom-view {
  margin-top: 20px;
  display: flex;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:nth-child(1) {
      padding-right: 10px;
    }
    &:nth-child(2) {
      padding-left: 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      padding: 0 20px;
      .title {
        font-size: 14px;
        font-weight: 500;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          width: 50%;
          box-sizing: border-box;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            height: 50px;
          }
        }
      }
    }
    .table-wrapper {
      flex: 1;
      margin-top: 20px;
      padding: 0 10px;
      .page-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 20px;
      }
    }
  }
}
</style>
