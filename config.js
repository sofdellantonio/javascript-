const config = {
    port: 4300,
    messaggi: {
        connection: 'connection',
        welcome: 'welcome',
        registration: 'registration',
        confermaRegistrazione: 'conferma-registrazione',
        nuovoUtente: 'nuovo-utente',
        creaNuovaRoom: 'crea-nuova-room',
        elencoRoom: 'elenco-room',
        entraInRoom: 'entra-in-room',        
    }
}

// Esporto l'oggetto config per poi usarlo in altri file js del mio progetto
module.exports = config;