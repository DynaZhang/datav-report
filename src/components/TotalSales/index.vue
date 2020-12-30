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
      <span class="emphasis">￥ {{data}}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TotalSales',
  mixins: [commonCardMixin],
  computed: {
    data () {
      return this.getReportData()
    }
  },
  inject: ['getReportData']
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/base.scss";
@import "../../assets/styles/mixin.scss";
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    font-size: $font-size4;
    margin-top: 3px;
    color: $gray2;
  }
}
</style>
