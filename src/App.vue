<template>
  <div id="app">
    <!--img id="handshake-img" src="./assets/handshake-transparent.png" data-html2canvas-ignore-->
    <router-link to ="tweets">Tweets </router-link>
    <router-link to ="bet"> bet</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>



<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url("https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300");
</style>
