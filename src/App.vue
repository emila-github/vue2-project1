<template>
  <div id="app">
    <top-nav></top-nav>
    <!-- <side-nav></side-nav> -->
    <router-view name="side"></router-view>
    <router-view></router-view>
  </div>
</template>


<script>
import topNav from './components/topNav'
// import sideNav from './components/sideNav'
// import Hello from './components/Hello'
// import HelloRouter from './components/HelloRouter'

export default {
  name: 'app',
  components: {
    'top-nav': topNav// ,
    // 'side-nav': sideNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
