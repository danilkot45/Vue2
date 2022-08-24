<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
.nav {
  padding: 10px 15px;
}
@import '../public/css/style.css';
@import '../public/css/bootstrap.min.css';
</style>
