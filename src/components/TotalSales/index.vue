<template>
  <common-card title="累计销售额" value="￥ 32,039,165">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比 </span>
          <span class="emphasis">7.33%</span>
          <div class="icon increase" />
        </div>
        <div class="compare">
          <span>月同比 </span>
          <span class="emphasis">36.79%</span>
          <div class="icon decrease" />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasis">￥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TotalSales',
  mixins: [commonCardMixin],
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
    .icon {
      width: 0;
      height: 0;
      border-width: 3px;
      border-style: solid;
      &.increase {
        margin: 0 0 3px 5px;
        border-color: transparent transparent red transparent;
      }
      &.decrease {
        margin: 3px 0 0 5px;
        border-color: green transparent transparent transparent;
      }
    }
  }
}
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
</style>
