<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <slot />
    </div>
    <div class="line" />
    <div class="total">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.common-card {
  .title {
    font-size: 12px;
    color: #999;
  }
  .value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart {
    height: 50px;
  }
  .line {
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total {
    color: #666;
    font-size: 12px;
  }
}
</style>
