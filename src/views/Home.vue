<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from '../components/TopView/index'
import SalesView from '../components/SalesView/index'
import BottomView from '../components/BottomView/index'
import MapView from '../components/MapView/index'
import {screenData, mapScatter, wordCloud} from "@/api";

export default {
  name: "Home",
  components: {
    TopView,SalesView,BottomView,MapView
  },
  data () {
    return {
      reportData: null,
      wordCloudData: null,
      mapData: null
    }
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getWordCloudData: this.getWordCloudData,
      getMapData: this.getMapData
    }
  },
  methods: {
    getReportData() {
      return this.reportData
    },
    getWordCloudData () {
      return this.wordCloudData
    },
    getMapData () {
      return this.mapData
    }
  },
  mounted() {
    screenData().then(response => {
      this.reportData = response
    }).catch(error => {
      console.log(error)
    })
    mapScatter().then(response => {
      this.mapData = response
    }).catch(error => {
      console.log(error)
    })
    wordCloud().then(response => {
      this.wordCloudData = response
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>
