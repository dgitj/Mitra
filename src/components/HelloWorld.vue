<template>
  <div ref= "content" class="form">
      <h3>Wettvertrag</h3>
      <p class="mb-2">Hiermit wette ich  <input type="text" id="name1" class="form-control" placeholder="Dein Name"> mit  <input type="text" id="name2" class="form-control" placeholder ="Wettpartner"> Die Wette lautet wie folgend</p>
      <mdb-input type="textarea" label="Wir wetten, dass..." outline :rows="3" id="Einsatz" />
      <mdb-input  type="textarea" label="Der Verlierer der Wette muss.." outline :rows="3" id="Einsatz"  />
  <p>Bitte unterschreibt hier: </p>
  <VueSignaturePad  height="100px" ref="signaturePad" id ="signature"/>
    <div>
      <button @click="save">Save</button>
      <button @click="undo">Undo</button>
    </div> 
  <p> Gebt hier eure E-Mail Adressen an. Mit dem Drücken auf Bestätigen werden PDF Versionen des unterschriebenen Vertrages an eure Mail Adressen versand. </p>
  <p class= "mb-2" > <mdb-input type="email" placeholder="e-mail Wettpartner 1" size="sm" outline/> <mdb-input type="email" placeholder="e-mail Wettpartner 2" size="sm" outline/></p>
  <mdb-btn @click="download" outline="primary">Bestätigen</mdb-btn>
    </div>    
</template>
  
<script>
import {mdbBtn} from 'mdbvue';
import { mdbInput } from "mdbvue";
import jsPDF from 'jspdf'; 

export default {
  name: 'InputsPage',
  components: {
    mdbBtn,
    mdbInput
  },
  methods: {
    download() {
      const doc = new jsPDF();
      const contentHtml = this.$refs.content.innerHTML;
      doc.fromHTML(contentHtml, 15, 15, {
        width: 170
      });
      doc.save("sample.pdf");
    },
      undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
    }
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
    margin-bottom:100px;

  
    ;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

button{
  align-content: left;
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

#signature{
  border-radius: 5px;
  border: double 2px;
}


  

</style>
