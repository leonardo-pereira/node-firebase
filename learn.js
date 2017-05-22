// npm install -g express-generator nodemon
//express --view=ejs
//npm install
// npm install firebase - quando acesso via UI diretamente
// npm install firebase-admin - quando eu tenho um backend
//npm install express-load <- carregtamento automatico

var firebase = require("firebase-admin");

firebase.initializeApp({
  credential : firebase.credential.cert(require("./credentials.json")),
  databaseURL: "https://teste-d289c.firebaseio.com/"
});

var ref = firebase.database().ref('alpha'); // pode ser uma hierarquia

var usuario =ref.child("time");

/*var objeto = { nome: "Botafogo", sigla: "Fogao", estado: "RJ", cores: "Preto e Branco", criadoEm: 1910 };
var retorno = usuario.push(objeto);*/



usuario.on('value', function(objeto) {
  console.log(objeto.val())
});

usuario.on('child_added', function(objeto) {
  console.log(objeto.val())
});

var objeto = { nome: "Botafogo", sigla: "Fogao", estado: "RJ", cores: "Preto e Branco", criadoEm: 1910 };
var retorno = usuario.push(objeto);