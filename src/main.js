import Vue from 'vue'
import App from './App.vue'
import FilterList from '@/filters'

import router from './router'
import Echarts from 'echarts'
import './plugins/element'
import './plugins/vcharts'
import VueEcharts from 'vue-echarts'

import './assets/styles/common.scss'

FilterList.forEach(item => {
  Vue.filter(item.name, item.handler)
})

Vue.prototype.$echarts = Echarts
Vue.prototype.$bmap = window.BMapGL

Vue.component('v-chart', VueEcharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
