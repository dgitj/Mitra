<template>
  <div class="sidebar"
       :data="backgroundColor">
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <a href="http://www.creative-tim.com"
           aria-label="sidebar mini logo"
           class="simple-text logo-mini">
          <div class="logo-img"
               :class="{'logo-img-rtl': $rtl.isRTL}">
            <img
              src="data:image/png;base64,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"
              alt="">
          </div>
        </a>
        <a href="http://www.creative-tim.com" class="simple-text logo-normal">
          {{title}}
        </a>
      </div>

  <div class = "bg">
    <div ref="content" class="form" id="contract" @submit.prevent="saveUser">
      <div id="head">
        <h3>Wettvertrag</h3>
        <p class="mb-2">
          Hiermit wette ich..
          <input v-model="name1" type="text"  class="form-control" id ="name" placeholder="Dein Name" required />
          mit
          <input v-model="name2" type="text" id="name" class="form-control" placeholder ="Wettpartner">.
        </p> 
      </div>
      <div  id="bet">
        <mdb-input type="textarea" size = "lg" label="Wir wetten, dass..." :rows="3" class="text-box" />
        <mdb-input  type="textarea" size = "lg" label="Der Verlierer der Wette muss..." :rows="3" id="stake" class="text-box" />
      </div>
      <p id>Bitte unterschreibt hier: </p>
      <div class="container" id="signature">
        <div class="row">
          <div class="col-6">
            <VueSignaturePad  width ="350px" height="150px" ref="signaturePad1" id="signaturePad1" class="pad"/>
            <div id ="ignore" data-html2canvas-ignore>
              <mdb-btn class="btn btn-blue-grey" @click="undo1">Undo</mdb-btn>
            </div> 
          </div>
          <div class="col-6">
            <VueSignaturePad  width ="300px" height="150px" ref="signaturePad2" class="pad"/>
            <div id ="ignore" data-html2canvas-ignore>
              <mdb-btn class="btn btn-blue-grey" @click="undo2">Undo</mdb-btn>
            </div>
          </div>
        </div>
      </div> 
      <p data-html2canvas-ignore id = "emailDescription"> 
        Gebt hier eure E-Mail Adressen an. Mit dem Drücken auf Bestätigen werden Kopien des unterschriebenen Vertrages an eure Mail Adressen verschickt.
      </p>
      <p class= "mb-2" data-html2canvas-ignore>
        <mdb-input type="email" v-model="mail1" placeholder="E-mail Wettpartner 1" size="lg" id="mail1"  outline />
        <mdb-input type="email" placeholder="E-mail Wettpartner 2" size="lg" id="mail2" v-model="mail2" outline/>
      </p>
      <mdb-btn id="submit-button" class="btn btn-elegant" @click="download" data-html2canvas-ignore>Download PDF</mdb-btn>
      <mdb-btn id="submit-button" class="btn btn-elegant" @click="saveAndSend" data-html2canvas-ignore>Send Mail</mdb-btn>
    
    <div id="user" data-html2canvas-ignore>
      <h6>Community</h6>
      <ul class="collection with-header">
        <li v-for="user in users" v-bind:key="user.id" class="collection-item">
          <div class="chip">{{user.name}}</div>
        </li>
        </ul>
      
    </div>
    <div id="disclaimer" data-html2canvas-ignore>
      <h5>Disclaimer!</h5>
      <h6>Wettschulden sind Ehrenschulden, die  gem. § 762 BGB, rechtlich gesehen, nicht zu erfüllen sind.</h6>
    </div>
  </div>
  </div>   
</template>

<script>
  import { mdbBtn } from 'mdbvue';
  import { mdbInput } from "mdbvue";
  import jsPDF from 'jspdf';
  import html2canvas from'html2canvas';
  import db from './firebaseInit'
  import firebase from "firebase"

  export default {
    name: 'InputsPage',
    components: {
      mdbBtn,
      mdbInput
    },

    data() {
      return{
        users: [],
        loading: true,
        name1:null,
        name2:null,
        mail1:null,
        mail2:null,  
      }
    },
    beforeMount(){
      this.created()
    },

    methods: { 
      async download() {
        let doc = new jsPDF("landscape")
        await html2canvas(document.querySelector(".form"), {
          x: 0,
          y: 0,
          width: 1000,
          height: 1000,
          scrollX: 0,
          scrollY: 0,
          windowWidth: 0,
          windowHeight: 1000
        }).then(canvas => {
          let imgData1 = canvas.toDataURL("img/png");
          doc.addImage(imgData1, 'PNG', 50, 10);
          doc.save('sample.pdf');
        })
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
      },

      saveAndSend () {
        let storageRef = firebase.storage().ref();
        let contractsRef = storageRef.child('contracts/contract.png')
        html2canvas(document.querySelector(".form"), {
          x: 0,
          y: 0,
          width: 1000,
          height: 1000,
          scrollX: 0,
          scrollY: 0,
          windowWidth: 0,
          windowHeight: 1000
        }).then(canvas => {
          //create blob
            canvas.toBlob(blob => {
              contractsRef.put(blob).then(snapshot => {
                snapshot.ref.getDownloadURL().then(downloadURL => {
                  db.collection('users').add({
                    name: this.name1,
                    mail: this.mail1,
                    downloadURL: downloadURL
                  })
                  db.collection("users").add({
                    name: this.name2,
                    mail: this.mail2,
                    downloadURL
                  })
                  .then(docRef => {
                    console.log('Contract added: ', docRef.id)
                  })
                  .catch(error => {
                    console.error('Error adding contract: ', error)
                  })
                })
              })
            },"img/png");
        })
      },
      
      created() {
        db
          .collection('users')
          .get()
          .then(querySnapshot => {
            this.loading = false;
            querySnapshot.forEach(doc => {
              const data = {
                name: doc.data().name,
                email: doc.data().email,
                
              };
              this.users.push(data);
            });
          });

      }
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pad {
    border-bottom: 2px solid;
    margin-bottom:5px;
  }

  .bg{
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg");
  }

  .text-box {
    margin-left: 10px;
    margin-right: 10px;
  }

  #submit-button {
    margin-bottom: 10px;
  }

  #contract {
    background-color:#eadebd;
    margin: auto;
    border: black;
    border-radius: 10px;
    border: double 7px;
    align-content: center;
    width: 750px;
    height:auto;
    
    
  }

  h3 {
    font-weight: normal;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: "helvetica";
  }

  p {
    color:black;
    font-size: 2rem;
    font: outline;
    text-align: left;
    margin-left: 10px;
    margin-right:10px;
    margin-top: 10px;
    margin-bottom:10px;
    font-family: 'Helvetica';
    font-weight: 300;
  }

  #disclaimer {
    background-color:#eadebd;
    position: fixed;
    bottom: 50px;
    right: 10px;
    width: 300px;
    border-radius:5px;
    border: double 1px;
  }

  #user
  {
    background-color:#eadebd;
    position: fixed;
    bottom: 50px;
    left: 10px;
    width: 250px;
    height: auto;
    border-radius:5px;
    border: double 1px;
    align-content:left;
  }

  #name {
    width: 130px;
    display: inline-block;
    height: 35px;
    text-align:center;
    
  }

  #text_groß {
    height: 400px;
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
    margin-bottom:100px;
    
  }

  #mail {
    margin-top:1px;
  } 

  #emailDescription{
    
    margin-bottom: 50px;
    border-top: 2px solid;
    margin-top:5px;
  }

  .text-box{
    font-size:2rem;

  }
</style>
