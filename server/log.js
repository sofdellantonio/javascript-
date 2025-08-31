//scrive nella console data e ora della richiesta e indirizzo ip del client 
//Parametri:
//request: richiesta del client
//response: risposta del server da mandare al client 
//next: funzione che rappresenta il modulo middleware successivo a cui passare l'elaborazione 
function log(request, response, next){
    const dataOra = new Date();
    console.log(dataOra.toLocaleString() + ': Indirizzo Ip: '+ request.ip);
    //in questo modo di passa l'elaborazione al middleware successivo 
    next();
}
//esporto l'oggetto config così da poterlo usare in altri file js del mio progetto 
module.exports = log;