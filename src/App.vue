<template>
  <div>
  <div id="app">
    <header>
      <!--img id="handshake-img" src="./assets/handshake-transparent.png" data-html2canvas-ignore-->
      <mdb-btn id = "router_btn" class="btn btn-dark" @click = "$router.push('/')"> Home </mdb-btn>
      <mdb-btn id = "router_btn" class="btn btn-dark" @click = "$router.push('tweets')"> Twitter bets </mdb-btn>
      <mdb-btn id = "router_btn" class="btn btn-dark" @click = "$router.push('bet')"> Create personal bet </mdb-btn>
      </header>
    
    <div>
    <main>
      <router-view/>
    </main>
    </div>
  </div>
  </div>
</template>

<script>
import { mdbBtn } from 'mdbvue';
export default {
  components: {
      mdbBtn,
  },

  name: 'App'
}
</script>



<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url("https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300");

#router_btn {
  color:white;

}

#app {
  height: 100%;
}
#bar{
  position:fixed;
  height: 70px;
  width:800px;
  margin-left: 10%;
  margin-bottom: 500px;
  
}

header{
  position:fixed;
  top:5px;
  right:5px;
}
</style>
