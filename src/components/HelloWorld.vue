<template>

  <div class="form" ref="content">
    
    <h3>Wettvertrag</h3>
    <p class="mb-2">Hiermit wette ich  <input type="text" id="name1" class="form-control" placeholder="Dein Name"> mit  <input type="text" id="name2" class="form-control" placeholder ="Wettpartner"> Die Wette lautet wie folgend</p>
    <mdb-input type="textarea" label="Wir wetten, dass..." outline :rows="3" id="Einsatz" />
    <p> Der Wetteinsatz ist der folgende: </p>
    <mdb-input class="w-75 p-3" type="textarea" label="Der Verlierer der Wette muss.." outline :rows="3" id="Einsatz"  />
    <p class= "mb-2" > <mdb-input class="w-25 p-3" type="email" placeholder="name1 e-mail" size="sm" outline/> <mdb-input class="w-25 p-3" type="email" placeholder="name1 e-mail" size="sm" outline/></p>
    <mdb-btn outline="primary">Bestätigen</mdb-btn>
    <button @click="download">Download PDF</button>
    
    </div>
    
</template>
  
<script>
import {mdbBtn} from 'mdbvue';
import { mdbInput } from "mdbvue";

export default {
  name: 'ButtonPage',
  components: {
    mdbBtn,
    mdbInput
  }

}
</script>

  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  .form {
    /* The image used */
    background-color:ghostwhite;

    /* Full height */
    
    width:50%;
    margin:auto;
    margin-top: 20px;
    border: black;

  
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
  text-align: left;
  margin-left: 10px;
  

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
  text-align: start;
}

#Einsatz{
  align-self: center;
  margin: auto;
}
  

</style>
