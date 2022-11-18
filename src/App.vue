<template>
  <div id="app">
    <linkShort></linkShort>
  </div>
</template>

<script>

import linkShort from './components/linkShort.vue'
export default {
  name: 'App',
  components: {
    linkShort
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Bebas Neue', cursive;
  background-color: rgb(253, 226, 226);
}
</style>
