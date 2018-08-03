<template>
  <div id="app">
   
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     
    }
  },
  
}
</script>

<style lang='stylus'>
*{
  margin: 0;
  padding: 0;
  &::-webkit-scrollbar {
      width: 4px;
  }
  &::-webkit-scrollbar-track {
      background-color: #eee;
  }
  &::-webkit-scrollbar-thumb {
      border-radius 2px;
      background: #ccc;
  }
}
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:calc(100% - 80px);
}
</style>
