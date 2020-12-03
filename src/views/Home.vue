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
export default {
  name: "Home",
  components: {
    TopView,SalesView,BottomView,MapView
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
