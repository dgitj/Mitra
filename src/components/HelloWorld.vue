<template>
  <div>
    <mdb-container>
        <mdb-row>
          <mdb-col>
    <div ref= "content" class="form" id="contract">
          <div   id="head">
            <h3>Wettvertrag</h3>
            <p class="mb-2">Hiermit wette ich  <input type="text" id="name1" class="form-control" placeholder="Dein Name"> mit  <input type="text" id="name2" class="form-control" placeholder ="Wettpartner"> . </p> 
            <!--p>Die Wette lautet wie folgend:</p-->
          </div>
          <div  id="bet">
            <mdb-input type="textarea" label="Wir wetten, dass..." outline :rows="3" />
            <mdb-input  type="textarea" label="Der Verlierer der Wette muss.." outline :rows="3" id="stake"  />
          </div>
          <p id>Bitte unterschreibt hier: </p>
        <div id="signature">
            <VueSignaturePad  width =" 600px" height="100px" ref="signaturePad" id ="pad"/>
              <div id = "ignore" data-html2canvas-ignore>
                <!--button @click="save">Save</button -->
                <button @click="undo">Undo</button>
              </div> 
        </div>  
        <p data-html2canvas-ignore> Gebt hier eure E-Mail Adressen an. Mit dem Drücken auf Bestätigen werden PDF Versionen des unterschriebenen Vertrages an eure Mail Adressen verschickt. </p>
        <p  data-html2canvas-ignore class= "mb-2" > <mdb-input type="email" placeholder="E-mail Wettpartner 1" size="sm" outline /> <mdb-input type="email" placeholder="E-mail Wettpartner 2" size="sm" outline/></p>
        <mdb-btn @click="download" outline="primary " data-html2canvas-ignore>Bestätigen</mdb-btn>
    </div> 
    </mdb-col>
    <mdb-col>
    <div id="disclaimer">
        <h2>Disclaimer</h2>
        <p>Wettschulden sind Ehrschulden, die  gem. § 762 BGB, rechtlich gesehen, nicht zu erfüllen sind.</p>
    </div>
    </mdb-col>
    </mdb-row>
    </mdb-container>
  </div>   
</template>
  

<script>
import {mdbBtn} from 'mdbvue';
import { mdbInput } from "mdbvue";
import jsPDF from 'jspdf'; 
import html2canvas from'html2canvas';

export default {
  name: 'InputsPage',
  components: {
    mdbBtn,
    mdbInput
  },
  methods: { 
    download() {
      var doc = new jsPDF
      html2canvas(document.querySelector('#contract'),{
        width: 10000,
        height: 1000,

      } 
      ).then(canvas => {
      document.body.appendChild(canvas)
          var imgData1 = canvas.toDataURL('img/png');
          doc.addImage(imgData1, 'PNG', 0, 0);
          doc.save('sample.pdf');
       });   
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
    background-color:#eadebd;

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
  padding-bottom: 20px;
}
p {
  color:black;
  font-size: 16px;
  text-align: left;
  margin-left: 10px;
  margin-right:10px;
  margin-top: 10px;
  margin-bottom:10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

#disclaimer{
  background-color:#eadebd;
  margin-right:20px;
  height:auto;
  width:300px;
  margin-left: 1250px;
  border-radius:5px;
  border: double 1px;
  
}
  
  


#name1{
  width: 130px;
  display: inline-block;
  height: 25px;
  text-align:center;

}



#name2{
  width: 130px;
  display: inline-block;
  height: 25px;
  text-align:center;
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
  align-self: center;
  margin-left: 20px;
}
#pad{
  border-bottom: 2px solid;
  width:90px;
  margin-bottom:5px;
  
}

#contract{
  height:800px;
  width:650px;
  border-radius: 5px;
  border: double 7px;
  margin-top:5px;
  margin-bottom:10px;
}

#mail{
  margin-top:1px;
}
  

</style>
