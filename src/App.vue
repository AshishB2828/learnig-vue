<template>
  <div id="app">
    <NavBar/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
export default {
  components: {
    NavBar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
 
}
.shadow{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.event-link{
    text-decoration: none;
}
#app{
   background-color: rgb(229, 229, 248);
   min-height: 100vh;
}



</style>
