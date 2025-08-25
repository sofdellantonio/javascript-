
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
})




