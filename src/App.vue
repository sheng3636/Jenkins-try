<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/fonts/iconfont.css';
@import './assets/css/initStyle.scss';
* { box-sizing: border-box;}
html,body {width: 100%;height: 100%;}
#app {
  height: 100%;
  color: #2c3e50;
}
</style>
