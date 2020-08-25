<template>
   <div class = "form">
    <form id="contract" @submit.prevent="saveUser">
      <div id="head">
        <h3>Bet</h3>
        <p>
          I 
           <mdb-input label="author" size="md" v-model="name1" id ="name" />
          <!--mdb-input label="Medium input" size="md"  v-model="name1"   class="form-control" id ="name" placeholder="your name" required /-->
          bet
          <mdb-input v-model="name2" type="text" id="name" placeholder ="bet partner"/>
          that
        </p> 
      </div>
      <div  id="bet">
        <mdb-input type="textarea" size = "lg" label="We bet that..." :rows="3" class="input" />
        <mdb-input  type="textarea" size = "lg" label="The loser has to.." :rows="3" id="stake" class = "input" />
      </div>
      <p id>Please sign here: </p>
      <div class="container" id="signature">
        <div class="row">
          <div class="col-6">
            <VueSignaturePad  width ="350px" height="150px" ref="signaturePad1" id="signaturePad1"/>
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
  </form >
  <div id = "email">
   <p data-html2canvas-ignore id = "emailDescription"> 
        Mails will be send your way
      </p>
      <p class= "mb-2" data-html2canvas-ignore>
        <mdb-input type="email" v-model="mail1" placeholder="E-mail Wettpartner 1" size="lg" id="mail1"  outline />
        <mdb-input type="email" placeholder="E-mail Wettpartner 2" size="lg" id="mail2" v-model="mail2" outline/>
      </p>
      <mdb-btn id="submit-button" class="btn btn-elegant" @click="download" data-html2canvas-ignore>Download PDF</mdb-btn>
      <mdb-btn id="submit-button" class="btn btn-elegant" @click="saveAndSend" data-html2canvas-ignore>Send Mail</mdb-btn>
      <vue-goodshare-twitter button_design="gradient" page_url="https://vuejsfeed.com/" has_icon has_square_edges></vue-goodshare-twitter>
  </div>
    <!--div id="user" data-html2canvas-ignore>
      <h6>Community</h6>
      <ul class="collection with-header">
        <li v-for="user in users" v-bind:key="user.id" class="collection-item">
          <div class="chip">{{user.name}}</div>
        </li>
        </ul>
      
    </div-->
    <div id="disclaimer" data-html2canvas-ignore>
      <h5>Disclaimer!</h5>
      <h6>Wettschulden sind Ehrenschulden, die  gem. § 762 BGB, rechtlich gesehen, nicht zu erfüllen sind.</h6>
    </div>
  </div>  
</template>

<script>
  import { mdbCol } from 'mdbvue';
  import { mdbContainer } from 'mdbvue';
  import { mdbBtn } from 'mdbvue';
  import { mdbInput } from "mdbvue";
  import jsPDF from 'jspdf';
  import html2canvas from'html2canvas';
  import db from './firebaseInit'
  import firebase from "firebase"
  import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'

  export default {
    name: 'InputsPage',
    components: {
      mdbBtn,
      mdbInput,
      VueGoodshareTwitter,
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




<style >

html, body {
  width: 100%;
  height:100%;
  margin:0 auto;
  text-align:center;
  }

  #submit-button {
    margin-bottom: 10px;
  }

  #contract {
    background-color:#eadebd; 
    border: black;
    border-radius: 10px;
    border: double 7px;
    align-content: center;
    width: 750px;
    margin-right:auto;
    margin-top: 20px;
    margin-left:40%;
    align-items: center;
    justify-content:center;
  }

  h3 {
    font-weight: bold;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: "helvetica";
  }

  p {
    color:black;
    font-size: 1.3rem;
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

  
  #email {
    background-color:lavender;
    position: fixed;
    top: 50px;
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

  #signature {
    width: 650px;
     
  }

#head{
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}
  
  
</style>
