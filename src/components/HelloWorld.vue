<template>
  <div>
    <div ref="content" class="form" id="contract" @submit.prevent="saveUser">
      <div id="head">
        <h3>Wettvertrag</h3>
        <p class="mb-2">
          Hiermit wette ich
          <input v-model="name1" type="text"  class="form-control" id ="name" placeholder="Dein Name" required />
          mit
          <input v-model="name2" type="text" id="name" class="form-control" placeholder ="Wettpartner">.
        </p> 
      </div>

      <div  id="bet">
        <mdb-input type="textarea" label="Wir wetten, dass..." :rows="3" class="text-box" />
        <mdb-input  type="textarea" label="Der Verlierer der Wette muss..." :rows="3" id="stake" class="text-box" />
      </div>
      <p id>Bitte unterschreibt hier: </p>
      <div class="container" id="signature">
        <div class="row">
          <div class="col-6">
            <VueSignaturePad  width ="300px" height="100px" ref="signaturePad1" id="signaturePad1" class="pad"/>
            <div id ="ignore" data-html2canvas-ignore>
              <mdb-btn class="btn btn-blue-grey" @click="undo1">Undo</mdb-btn>
            </div> 
          </div>
          <div class="col-6">
            <VueSignaturePad  width ="300px" height="100px" ref="signaturePad2" class="pad"/>
            <div id ="ignore" data-html2canvas-ignore>
              <mdb-btn class="btn btn-blue-grey" @click="undo2">Undo</mdb-btn>
            </div>
          </div>
        </div>
      </div> 
      <p data-html2canvas-ignore> 
        Gebt hier eure E-Mail Adressen an. Mit dem Drücken auf Bestätigen werden PDF Versionen des unterschriebenen Vertrages an eure Mail Adressen verschickt.
      </p>
      <p class= "mb-2" data-html2canvas-ignore>
        <mdb-input type="email" v-model="mail1" placeholder="E-mail Wettpartner 1" size="sm" id="mail1"  outline />
        <mdb-input type="email" placeholder="E-mail Wettpartner 2" size="sm" id="mail2" v-model="mail2" outline/>
      </p>
      <mdb-btn id="submit-button" class="btn btn-elegant" @click="saveBothUsers" data-html2canvas-ignore>Save</mdb-btn>
      <mdb-btn id="submit-button" class="btn btn-elegant" @click="download" data-html2canvas-ignore>Mail</mdb-btn>
    
    <div id="user" data-html2canvas-ignore>
      <ul class="collection with-header">
        <h4>Community</h4>
        <li v-for="user in users" v-bind:key="user.id" class="collection-item">
          <div class="chip">{{user.name}}</div>
        </li>
        </ul>
    </div>
    <div id="disclaimer">
      <h2>Disclaimer</h2>
      <p>Wettschulden sind Ehrschulden, die  gem. § 762 BGB, rechtlich gesehen, nicht zu erfüllen sind.</p>
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
        mail2:null
        
      }
    },
    beforeMount(){
      this.created()
    },

    methods: { 
      async download() {
        var doc = new jsPDF("landscape")
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
          var imgData1 = canvas.toDataURL("img/png");
          doc.addImage(imgData1, 'PNG', 50, 10);
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
      },

      saveUser1 () {
          db.collection('users').add({
            name: this.name1,
            email: this.mail1,
            
          })
          .then(docRef => {
            console.log('Client added: ', docRef.id)
            this.$router.push('/')
          })
          .catch(error => {
            console.error('Error adding employee: ', error)
          })
      },

       saveUser2 () {
          db.collection('users').add({
            name: this.name2,
            email: this.mail2,
            
          })
          .then(docRef => {
            console.log('Client added: ', docRef.id)
            this.$router.push('/')
          })
          .catch(error => {
            console.error('Error adding employee: ', error)
          })
        }, 
      
      saveBothUsers(){
        this.saveUser2()
        this.saveUser1()
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

  #user
  {
    background-color:#eadebd;
    position: fixed;
    top: 50px;
    left: 50px;
    width: 200px;
    height: auto;
    border-radius:5px;
    border: double 1px;
    align-content:left;
  }

  #name {
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

  #mail {
    margin-top:1px;
  } 
</style>
