<template>

  <div class="bg">
    
    <h3>{{ msg }}</h3>
    <p class="mb-2">Hiermit wette ich  <input type="text" id="name1" class="form-control" placeholder="Dein Name"> mit  <input type="text" id="name2" class="form-control" placeholder ="Wettpartner"> Die Wette lautet wie folgend</p>
    <input type="text" id="text_groß" class="form-control">
    <p> Der Wetteinsatz ist der folgende: </p>
    <input type="text" id="text_groß" class="form-control">
    <mdb-btn outline="primary">Bestätigen</mdb-btn>
    
    </div>
    
</template>
  
<script>
import {mdbBtn} from 'mdbvue';
export default {
  name: 'ButtonPage',
  components: {
    mdbBtn
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-color:ghostwhite;

    /* Full height */
    height: 100%;
    width:50%;
    margin:auto;
  
    ;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }


h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
  text-align: center;

}
#name1{
  width: 150px;
  display: inline-block;
}
#name2{
  width: 150px;
  display: inline-block;
}
#text_groß{
  height: 100px;
  width:600px;
  display: block;
  margin: 0 auto;
  
}
</style>
