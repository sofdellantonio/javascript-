const express = require('express'); //importo il modulo express nel codice 
const socket = require('socket.io');
const http = require('http');

const app = express(); //app è un istanza di express

const config = require('./config');
const log = require('./log');

app.use(log);

app.get('/hello-world', (request, response) => {
    response.status(200).send({
        messaggio: 'Hello world!'
    })
});


/*esempio 2 
//Rispondi al client inviando un file (Il meccanismo reale prevede che express apra il file html, ne legga il contenuto e lo aggiunga al body della risposta http)

app.get('',(request, response)=>{
    response.status(200).sendFile(__dirname +'/server/index.html');
})

//metto in ascolto il server anche per il foglio stile (ma a che scopo?)
app.get('', (request, response)=>{
    response.status(200).sendFile(__dirname + '/server/style.css');
})*/

//realizzazione di un comune web server
//il metodo di express prevede la possibilità di aggiungere un middleware alla catena di elaborazione di express.
//per tutte le URL '' il server passerà l'elaborazione a express.static
//express static cercherà nella directory public (nel mio caso si chiama server) il file richiesto dal client e se trovato lo invierà in risposta.

app.use('', express.static(__dirname + '/server'));

//creo un server nel quale mettere la mia applicazione 
const server = app.listen(config.port, () => {
    // Visualizzo nella console che il server è in esecuzione.
    console.log('Server in ascolto sulla porta: ', config.port);
    
})

let utenti=[];
let rooms = [];

const io = socketio(server);

//on consente di definire cosa deve fare il server quando un client chiede di stabilire una connessione.
//il codice che il server deve eseguire va scritto nella funzione di callback 
//socketServer è un oggetto che rimane attivo fintanto che il client non è connesso, e viene distrutto solo quando il client lo abbandona
//attraverso il socketserver il server può iniviare o ricevere messaggi dal client
io.on(config.messaggi.connection, (socketServer)=>{
    console.log('si è connesso un client');
    socketServer.emit(config.messaggi.welcome, 'Benvenuto nella chat. Per interagire con gli altri devi registrarti');

    socketServer.on(config.messaggi.registration, (nickname)=>{
        socketServer.data.nickname = nickname;
        utenti.push(nickname);
        socketServer.emit(config.messaggi.confermaRegistrazione, {
            nickname: nickname,
            messaggio: 'Avvenuta Registrazione',
            utenti: utenti,
            rooms: rooms
        });
        socketServer.broadcast.emit(config.messaggi.nuovoUtente, {
            messaggio: 'Un nuovo utente si è unito alla chat', 
            utenti: utenti, 
            rooms: rooms
        });
        console.log(nickname);
    });
    socketServer.on(config.messaggi.creaNuovaRoom, roomName =>{
        roomName.push(roomName);
        io.emit(config.messaggi.elencoRoom, {
            messaggio: 'elenco room aggiornato',
            rooms: rooms
        });
    });
});