<template>
  <ve-wordcloud :settings="chartSettings" :data="chartData" height="100%"/>
</template>

<script>
export default {
  name: 'WordCloud',
  data() {
    return {
      chartData: {},
      chartSettings: {
        color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)']
      }
    }
  },
  mounted() {
    this.chartData = {
      columns: ['word', 'count'],
      rows: [
        {
          word: '慕课网1',
          count: Math.random() * 100
        },
        {
          word: '慕课网2',
          count: Math.random() * 100
        },
        {
          word: '慕课网3',
          count: Math.random() * 100
        },
        {
          word: '慕课网4',
          count: Math.random() * 100
        },
        {
          word: '慕课网5',
          count: Math.random() * 100
        },
        {
          word: '慕课网6',
          count: Math.random() * 100
        },
        {
          word: '慕课网7',
          count: Math.random() * 100
        },
        {
          word: '慕课网8',
          count: Math.random() * 100
        },
        {
          word: '慕课网9',
          count: Math.random() * 100
        },
        {
          word: '慕课网10',
          count: Math.random() * 100
        }
      ]
    }
  }
}
</script>

<style scoped>
.index {
}
</style>
