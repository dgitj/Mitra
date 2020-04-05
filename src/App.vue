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

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCb3TiWgUq6tYXv-ThBZlHxau6QcENEMA8",
    authDomain: "mitra-333f5.firebaseapp.com",
    databaseURL: "https://mitra-333f5.firebaseio.com",
    projectId: "mitra-333f5",
    storageBucket: "mitra-333f5.appspot.com",
    messagingSenderId: "359716290591",
    appId: "1:359716290591:web:ad2310521be79eefec952a",
    measurementId: "G-3VDPP84S43"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
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
    height: 100%;
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
