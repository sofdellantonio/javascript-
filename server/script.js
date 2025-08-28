const messaggi ={
    welcome: 'welcome',
    registration: 'registration',
    confermaRegistrazione: 'conferma-registrazione',
    nuovoUtente: 'nuovo-utente',
    creaNuovaRoom: 'crea-nuova-room',
    elencoRoom: 'elenco-room',
    entraInRoom: 'entra-in-room'
};
 let button = document.querySelector('button');
 let title = document.querySelector('h1');
 let numero = document.querySelector('input');

function cubo(number){
let result = number*number*number;
console.log(result);
return result;
}
 
//risponde quando il bottone viene cliccato chiamando la funzione cubo
button.addEventListener('click', ()=>{
    //title.innerHtml fa diventare il titolo già inserito il risultato della funzione cubo
    title.innerHTML = cubo(numero.value);
});
let immagine = document.getElementById('logo');
immagine.addEventListener('click', ()=>{
    immagine.remove();  //rimuove l'immagine dal sito 
    
});
/* QUESTA è LA VERSIONE VECCHIA DI FETCH 
function loadAsset(url, type, callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function(){
        callback(xhr.response);
    };
    xhr.send();
}

function displayImage(blob){
    let objectUrl = URL.createObjectURL(blob);
    let image = document.createElement('img'); //crea un elemento html immagine 
    image.src = objectUrl;
    document.body.appendChild(image);//lo aggiunge al body del documento
}
loadAsset('https://cdn-icons-png.flaticon.com/512/1094/1094625.png', 'blob', displayImage);*/

//fa una richiesta fetch al link che contiene un json ma si potrebbe fare anche con un file json già presente nel progetto
fetch('https://dogapi.dog/api-docs/v2/swagger.json').then(function (response){  //then: una volta che hai preso json, chiama la callback
    return response.json(); //rende leggibile il contenuto
}).then(function (json){ //prende il json e lo salva in una variabile 
    classe = json;
    console.log('Dati ', classe)
}).catch(function(err){//catch serve per gestire l'errore
    console.log('Fetch problem: ', err);
});
/**let prova = setTimeout(function(){
    alert('ciao sono in timeout'); //per boccarlo si usa i cleartimeout come per esempio su un bottone
}, 2000); //funzione da eseguire e il tempo di attesa si può anche fare la funzione esterna e chiamarla  */

const createClock = setInterval(()=>{
    let date = new Date;
    let time = date.toLocaleTimeString();
    document.getElementById('dataUp').textContent = time;
},1000); //per fermarlo clearInterval

var socketClient = io();
function registration(){
    let nickname = document.getElementById('nickname');
    socketClient.emit(messaggi.registration, nickname);
}
/*
function creaRoom(){
    let roomName = document.getElementByI
}
*/
