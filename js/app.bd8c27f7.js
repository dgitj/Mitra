(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("9085"),r=n.n(a);r.a},"31f2":function(t,e,n){"use strict";var a=n("ed78"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("becf"),n("cabf"),n("3c76");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"app"}},[n("header",[n("mdb-btn",{staticClass:"btn btn-dark",attrs:{id:"router_btn"},on:{click:function(e){return t.$router.push("/")}}},[t._v(" Home ")]),n("mdb-btn",{staticClass:"btn btn-dark",attrs:{id:"router_btn"},on:{click:function(e){return t.$router.push("tweets")}}},[t._v(" Twitter bets ")]),n("mdb-btn",{staticClass:"btn btn-dark",attrs:{id:"router_btn"},on:{click:function(e){return t.$router.push("bet")}}},[t._v(" Create personal bet ")])],1),n("div",[n("main",[n("router-view")],1)])])])},i=[],o=n("91c9"),s={components:{mdbBtn:o["mdbBtn"]},name:"App"},l=s,c=(n("034f"),n("2877")),d=Object(c["a"])(l,r,i,!1,null,null,null),u=d.exports,m=n("8c4f"),b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"word"},[n("span",[t._v("b ")]),n("span",[t._v("e")]),n("span",[t._v("t ")]),n("span",[t._v(" R")])]),n("h3",{staticClass:"fixed"},[t._v("be betR!")]),n("h5",{staticClass:"explain"},[t._v("I'm a bot. Call me and I will log your bet.")]),n("footer",[n("p",[t._v("Tell me your bets on twitter "),n("a",{attrs:{target:"_blank",href:"www.twitter.com/thebetR"}},[t._v("@thebetR")])])])])}],f=(n("4160"),n("159b"),document.querySelectorAll(".word span")),h={};f.forEach((function(t,e){t.addEventListener("click",(function(t){t.target.classList.add("active")})),t.addEventListener("animationend",(function(t){t.target.classList.remove("active")})),setTimeout((function(){t.classList.add("active")}),750*(e+1))}));var v=h,g=(n("31f2"),Object(c["a"])(v,b,p,!1,null,null,null)),_=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mdb-tbl",{attrs:{hover:""}},[n("mdb-tbl-head",[n("tr",[n("th",[t._v("#")]),n("th",[t._v("Author")]),n("th",[t._v("Bet Partner")]),n("th",[t._v("Bettttttttttttttttttttttttttttttttttttttttttttttt")])])]),n("mdb-tbl-body",[n("tr",[n("th",[t._v("1")]),n("td",[t._v("Mark")]),n("td",[t._v("Otto")]),n("td",[t._v("@mdo")])]),n("tr",[n("th",[t._v("2")]),n("td",[t._v("Jacob")]),n("td",[t._v("Thornton")]),n("td",[t._v("@fat")])]),n("tr",[n("th",[t._v("3")]),n("td",{attrs:{colspan:"2"}},[t._v("Larry the Bird")]),n("td",[t._v("@twitter")])])])],1)],1)},y=[],x=n("ade3"),C={name:"TablePage",components:{mdbTbl:o["mdbTbl"],mdbTblHead:o["mdbTblHead"],mdbTblBody:o["mdbTblBody"]},data:function(){return{betsCollection:[]}},mounted:function(){var t=this,e=this.$firebase.firestore();e.collection("bets").get().then((function(e){var n=[];e.forEach((function(t){n.push(Object(x["a"])({},t.id,t.data()))})),t.betsCollection=n}))}},P=C,k=Object(c["a"])(P,w,y,!1,null,null,null),S=k.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[n("form",{attrs:{id:"contract"},on:{submit:function(e){return e.preventDefault(),t.saveUser(e)}}},[n("div",{attrs:{id:"head"}},[n("h3",[t._v("Bet")]),n("p",[t._v(" I "),n("mdb-input",{attrs:{label:"author",size:"md",id:"name"},model:{value:t.name1,callback:function(e){t.name1=e},expression:"name1"}}),t._v(" bet "),n("mdb-input",{attrs:{type:"text",id:"name",placeholder:"bet partner"},model:{value:t.name2,callback:function(e){t.name2=e},expression:"name2"}}),t._v(" that ")],1)]),n("div",{attrs:{id:"bet"}},[n("mdb-input",{staticClass:"input",attrs:{type:"textarea",size:"lg",label:"We bet that...",rows:3}}),n("mdb-input",{staticClass:"input",attrs:{type:"textarea",size:"lg",label:"The loser has to..",rows:3,id:"stake"}})],1),n("p",{attrs:{id:""}},[t._v("Please sign here: ")]),n("div",{staticClass:"container",attrs:{id:"signature"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("VueSignaturePad",{ref:"signaturePad1",attrs:{width:"350px",height:"150px",id:"signaturePad1"}}),n("div",{attrs:{id:"ignore","data-html2canvas-ignore":""}},[n("mdb-btn",{staticClass:"btn btn-blue-grey",on:{click:t.undo1}},[t._v("Undo")])],1)],1),n("div",{staticClass:"col-6"},[n("VueSignaturePad",{ref:"signaturePad2",staticClass:"pad",attrs:{width:"300px",height:"150px"}}),n("div",{attrs:{id:"ignore","data-html2canvas-ignore":""}},[n("mdb-btn",{staticClass:"btn btn-blue-grey",on:{click:t.undo2}},[t._v("Undo")])],1)],1)])])]),n("div",{attrs:{id:"email"}},[n("p",{attrs:{"data-html2canvas-ignore":"",id:"emailDescription"}},[t._v(" Mails will be send your way ")]),n("p",{staticClass:"mb-2",attrs:{"data-html2canvas-ignore":""}},[n("mdb-input",{attrs:{type:"email",placeholder:"E-mail Wettpartner 1",size:"lg",id:"mail1",outline:""},model:{value:t.mail1,callback:function(e){t.mail1=e},expression:"mail1"}}),n("mdb-input",{attrs:{type:"email",placeholder:"E-mail Wettpartner 2",size:"lg",id:"mail2",outline:""},model:{value:t.mail2,callback:function(e){t.mail2=e},expression:"mail2"}})],1),n("mdb-btn",{staticClass:"btn btn-elegant",attrs:{id:"submit-button","data-html2canvas-ignore":""},on:{click:t.download}},[t._v("Download PDF")]),n("mdb-btn",{staticClass:"btn btn-elegant",attrs:{id:"submit-button","data-html2canvas-ignore":""},on:{click:t.saveAndSend}},[t._v("Send Mail")]),n("vue-goodshare-twitter",{attrs:{button_design:"gradient",page_url:"https://vuejsfeed.com/",has_icon:"",has_square_edges:""}})],1),t._m(0)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"disclaimer","data-html2canvas-ignore":""}},[n("h5",[t._v("Disclaimer!")]),n("h6",[t._v("Wettschulden sind Ehrenschulden, die gem. § 762 BGB, rechtlich gesehen, nicht zu erfüllen sind.")])])}],T=(n("b0c0"),n("96cf"),n("1da1")),j=n("e511"),B=n.n(j),$=n("c0e9"),I=n.n($),L=n("8aa5"),R=n.n(L),D=(n("e71f"),{apiKey:"AIzaSyCb3TiWgUq6tYXv-ThBZlHxau6QcENEMA8",authDomain:"mitra-333f5.firebaseapp.com",databaseURL:"https://mitra-333f5.firebaseio.com",projectId:"mitra-333f5",storageBucket:"mitra-333f5.appspot.com",messagingSenderId:"359716290591",appId:"1:359716290591:web:ad2310521be79eefec952a",measurementId:"G-3VDPP84S43"}),M=R.a.initializeApp(D),U=M.firestore(),z=n("79b6"),A={name:"InputsPage",components:{mdbBtn:o["mdbBtn"],mdbInput:o["mdbInput"],VueGoodshareTwitter:z["a"]},data:function(){return{users:[],loading:!0,name1:null,name2:null,mail1:null,mail2:null}},beforeMount:function(){this.created()},methods:{download:function(){return Object(T["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new B.a("landscape"),t.next=3,I()(document.querySelector(".form"),{x:0,y:0,width:1e3,height:1e3,scrollX:0,scrollY:0,windowWidth:0,windowHeight:1e3}).then((function(t){var n=t.toDataURL("img/png");e.addImage(n,"PNG",50,10),e.save("sample.pdf")}));case 3:case"end":return t.stop()}}),t)})))()},undo1:function(){this.$refs.signaturePad1.undoSignature()},undo2:function(){this.$refs.signaturePad2.undoSignature()},save:function(){var t=this.$refs.signaturePad1.saveSignature(),e=t.isEmpty1,n=t.data1,a=this.$refs.signaturePad2.saveSignature(),r=a.isEmpty2,i=a.data2;console.log(e),console.log(n),console.log(r),console.log(i)},saveAndSend:function(){var t=this,e=R.a.storage().ref(),n=e.child("contracts/contract.png");I()(document.querySelector(".form"),{x:0,y:0,width:1e3,height:1e3,scrollX:0,scrollY:0,windowWidth:0,windowHeight:1e3}).then((function(e){e.toBlob((function(e){n.put(e).then((function(e){e.ref.getDownloadURL().then((function(e){U.collection("users").add({name:t.name1,mail:t.mail1,downloadURL:e}),U.collection("users").add({name:t.name2,mail:t.mail2,downloadURL:e}).then((function(t){console.log("Contract added: ",t.id)})).catch((function(t){console.error("Error adding contract: ",t)}))}))}))}),"img/png")}))},created:function(){var t=this;U.collection("users").get().then((function(e){t.loading=!1,e.forEach((function(e){var n={name:e.data().name,email:e.data().email};t.users.push(n)}))}))}}},W=A,H=(n("837a"),Object(c["a"])(W,E,O,!1,null,null,null)),q=H.exports;a["a"].use(m["a"]);var G=new m["a"]({routes:[{path:"/",name:"HelloWorld",component:_},{path:"/bet",name:"bet",component:q},{path:"/tweets",name:"tweets",component:S}]}),V=n("2f62");a["a"].use(V["a"]);var J=new V["a"].Store({state:{},mutations:{},actions:{}}),X=n("1918"),Y=n.n(X);n("5aea");a["a"].use(Y.a),a["a"].config.productionTip=!1,new a["a"]({router:G,store:J,render:function(t){return t(u)}}).$mount("#app")},"5aea":function(t,e,n){},"837a":function(t,e,n){"use strict";var a=n("94ed"),r=n.n(a);r.a},9085:function(t,e,n){},"94ed":function(t,e,n){},ed78:function(t,e,n){}});
//# sourceMappingURL=app.bd8c27f7.js.map