<template>
  <el-row :gutter="20" class="top-view">
    <el-col :span="6">
      <el-card shadow="hover">
        <total-sales />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <total-orders />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <total-users />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <today-users />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import TotalSales from '../TotalSales/index'
import TotalOrders from '../TotalOrders/index'
import TotalUsers from '../TotalUsers/index'
import TodayUsers from '../TodayUsers/index'
export default {
  name: "TopView",
  components: {TotalSales,TotalOrders,TotalUsers,TodayUsers},
  data () {
    return {
      bodyStyle: {
        padding: 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
.top-view {

}
</style>
