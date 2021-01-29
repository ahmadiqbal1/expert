<template>
  <div id="app">
    <img alt="experts.dev" src="./assets/logo.png">
    <entry msg="Meet the Experts"/>
  </div>
</template>

<script>
import entry from './components/Entry.vue'

export default {
  name: 'app',
  components: {
    entry
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
