
// definire un oggetto 
/**let piatto = ({
    nome:"Gnocchi di Polenta con ragu di coniglio",
    prezzo: 12,
    allergeni:["lattosio", "glutine"],
    note: ""
});*/

 let button = document.querySelector('button');
 let title = document.querySelector('h1');
 let numero = document.querySelector('input');

/** function bottone(nome = "Marco"){
title.innerHTML = `Ciao ${nome}`;

}
button.addEventListener("click", ()=>{bottone(nome.value)});
 */
function cubo(number){
let result = number*number*number;
console.log(result);
return result;
}
button.addeEventListener('click', ()=>{
   
    title.innerHTML = cubo(numero.value);
});

//al click del bottone deve venire fuori ciao nome a random

