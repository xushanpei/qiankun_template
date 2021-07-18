<template>
  <div id="app">
    <!-- vue 2.0 作为子应用 -->
    <div>vue 2.0 作为子应用</div>
    <img alt="Vue logo" src="./assets/logo.png"><br/>
    <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
     <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50
}
</style>
