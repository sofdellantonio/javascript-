
 let button = document.querySelector('button');
 let title = document.querySelector('h1');
 let numero = document.querySelector('input');

function cubo(number){
let result = number*number*number;
console.log(result);
return result;
}
 
button.addEventListener('click', ()=>{
    title.innerHTML = cubo(numero.value);
})




