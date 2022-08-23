<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view :state="state" @entry="Entry()"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  data() {
    return {
      state: false
    }
  },
  methods: {
    Entry() {
      this.state = true
      localStorage.setItem('entry', true);
    }
  },
  components: {
    NavBar
  },
  mounted() {
    localStorage.setItem('entry', false);
  }
}
</script>

<style>
#app {
  text-align: center;
}

.nav {
  padding: 10px 15px;
}

@import '../public/css/style.css';
@import '../public/css/bootstrap.min.css';
</style>
