<template>
  <common-card>
    <div class="total-users"></div>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
.total-users {}
</style>