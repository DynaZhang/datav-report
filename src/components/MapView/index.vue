<template>
  <div class="map-view">
    <div class="left">
      <BMapScatter />
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template slot="header">
          <div class="title-wrapper">
            <div class="title">用户月同比增长</div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <liquid-fill />
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template slot="header">
          <div class="title-wrapper">
            <div class="title">热门搜索</div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <word-cloud />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import BMapScatter from "@/components/BMapScatter/index";
import LiquidFill from "@/components/LiquidFill/index";
import WordCloud from "@/components/WordCloud/index";
export default {
  name: "MapView",
  components: {WordCloud, LiquidFill, BMapScatter},
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.map-view {
  display: flex;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 600px;
    background: #ffffff;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
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
      width: 100%;
      height: 190px;
    }
  }
}
</style>
