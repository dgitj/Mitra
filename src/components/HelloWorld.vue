<template>
<<<<<<< HEAD
<h1> HELLO WORLD </h1>    
=======
  <div class = "bg">
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
>>>>>>> parent of 8173032... Update HelloWorld.vue
</template>

<script>
export default {
    
}
</script>
