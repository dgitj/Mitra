<template>
  <div id="app" class ="bg">
    <img id="handshake-img" src="./assets/handshake-transparent.png" data-html2canvas-ignore>
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

  html, body {
    height: 100%;
  }
  
  #app {
    text-align: center;
    margin-top: 0px;
    height: auto;
    min-height: 900px;
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #handshake-img {
    height: 100px;
    opacity: 0.5;
  }
</style>
