<template>
  <div>
      <div id="disclaimer">
        <h2>Disclaimer</h2>
        <p>Wettschulden sind Ehrschulden, die  gem. § 762 BGB, rechtlich gesehen, nicht zu erfüllen sind.</p>
      </div>

      <div ref="content" class="form" id="contract">
        <div id="head">
          <h3>Wettvertrag</h3>
          <p class="mb-2">
            Hiermit wette ich
            <input type="text" id="name1" class="form-control" placeholder="Dein Name"/>
            mit
            <input type="text" id="name2" class="form-control" placeholder ="Wettpartner">.
          </p> 
        </div>
        <div  id="bet">
          <mdb-input type="textarea" label="Wir wetten, dass..." outline :rows="3" />
          <mdb-input  type="textarea" label="Der Verlierer der Wette muss.." outline :rows="3" id="stake"  />
        </div>
        <p id>Bitte unterschreibt hier: </p>
        <div class="container" id="signature">
          <div class="row">
            <div class="col-6">
              <VueSignaturePad  width ="300px" height="100px" ref="signaturePad1" class="pad"/>
              <div id = "ignore" data-html2canvas-ignore>
                <mdb-btn @click="undo1">Undo</mdb-btn>
              </div> 
            </div>
            <div class="col-6">
              <VueSignaturePad  width ="300px" height="100px" ref="signaturePad2" class="pad"/>
              <div id = "ignore" data-html2canvas-ignore>
                <mdb-btn @click="undo2">Undo</mdb-btn>
              </div>
            </div>
          </div>
        </div> 
        <p data-html2canvas-ignore> 
          Gebt hier eure E-Mail Adressen an. Mit dem Drücken auf Bestätigen werden PDF Versionen des unterschriebenen Vertrages an eure Mail Adressen verschickt.
        </p>
        <p  data-html2canvas-ignore class= "mb-2" >
          <mdb-input type="email" placeholder="E-mail Wettpartner 1" size="sm" outline />
          <mdb-input type="email" placeholder="E-mail Wettpartner 2" size="sm" outline/>
        </p>
        <mdb-btn id="submit-button" @click="download" data-html2canvas-ignore>Bestätigen</mdb-btn>
      </div> 

  </div>   
</template>

<script>
  import { mdbBtn } from 'mdbvue';
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

        }
        ).then(canvas => {
          var imgData1 = canvas.toDataURL('img/png');
          doc.addImage(imgData1, 'PNG', 0, 0);
          doc.save('sample.pdf');
        });   
      },
      undo1() {
        this.$refs.signaturePad1.undoSignature();
      },
      undo2() {
        this.$refs.signaturePad2.undoSignature();
      },
      save() {
        const { isEmpty1, data1 } = this.$refs.signaturePad1.saveSignature();
        const { isEmpty2, data2 } = this.$refs.signaturePad2.saveSignature();
        console.log(isEmpty1);
        console.log(data1);
        console.log(isEmpty2);
        console.log(data2);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #contract {
    background-color:#eadebd;
    margin: auto;
    margin-top: 20px;
    border: black;
    border-radius: 10px;
    border: double 7px;
    align-content: center;
    width: 750px;
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

  #disclaimer {
    background-color:#eadebd;
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 300px;
    border-radius:5px;
    border: double 1px;
  }

  #name1 {
    width: 130px;
    display: inline-block;
    height: 25px;
    text-align:center;
  }

  #name2 {
    width: 130px;
    display: inline-block;
    height: 25px;
    text-align:center;
  }
  #text_groß {
    height: 100px;
    width:600px;
    display: block;
    margin: 0 auto;
    text-align: start;
  }

  #Einsatz {
    align-self: center;
    margin: auto;
  }

  #signature {
    width: 650px;
  }
  .pad {
    border-bottom: 2px solid;
    margin-bottom:5px;
  }

  #mail {
    margin-top:1px;
  } 
</style>
