<template>
  <common-card>
    <div class="total-orders"></div>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TotalOrders',
  mixins: [commonCardMixin],
  data() {
    return {}
  }
}
</script>

<style scoped>
.total-orders  {
}
</style>
