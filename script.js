/** 
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
    
});*/
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
loadAsset('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fit%2F&psig=AOvVaw1YBZXpVjbTKax9Czy-lftX&ust=1756280868025000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPDo5pv-p48DFQAAAAAdAAAAABAh', 'blob', displayImage)



