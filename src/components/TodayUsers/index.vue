<template>
  <common-card>
    <div class="today-users"></div>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
  .today-users {
    
  }
</style>