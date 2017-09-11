<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div  class="footer">
        <router-link tag="div" to="/one" class="one" >one</router-link>
        <router-link tag="div" to="/two" class="two" >two</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
.footer{
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: #cccccc;
  bottom: 0;
  display: flex;
  justify-content: center;
   align-items: center;

}
.footer div{
    margin: 0px 50px;
    cursor: pointer;
}
</style>
