<template>
  <div id="app" class ="bg">
    <img src="./assets/handshake2.jpg" data-html2canvas-ignore>
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

#app {
  text-align: center;
  margin-top: 0px;
  
}
img{
  height: 50px;
  opacity: 0.2;
  border-radius:50%;
  
  

}

  body, html {
    height: auto;
  }
  .bg {
    /* The image used */
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg");

    /* Full height */
    height: 120%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
