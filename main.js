/*Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio,
 secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
 realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati 
e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla 
esteticamente gradevole.

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. 
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/

const fullNameEl = document.getElementById('fullName');
//console.log(fullNameEl);
const kmCounterEl = document.getElementById('kmCounter');
//console.log(kmCounterEl);
const submitEl = document.getElementById('submit');
//console.log(submitEl);
const passengerAgeEl = document.getElementById('passengerAge');
//console.log(passengerAgeEl);
const ticketEl = document.getElementById('ticket');
const outputFullNameEl = document.getElementById('outputFullName');
const outputKmCounterEl = document.getElementById('outputKmCounter');
const outputPassengerAgeEl = document.getElementById('outputPassengerAge');
const outputPriceEl = document.getElementById('outputPrice');


ticketEl.addEventListener ('submit', (e)=>{
    e.preventDefault();

    if (!fullNameEl.value || isNaN(kmCounterEl.value) || kmCounterEl.value <= 0 || isNaN(passengerAgeEl.value) || passengerAgeEl.value <= 0) {
        console.log("⚠️ Inserisci valori validi in tutti i campi.");
        return;
    }

    let price = 0.21 * Number(kmCounterEl.value);


    if(Number(passengerAgeEl.value) < 18){
        price = price - (price * 20 / 100);   
    }
    else if (Number(passengerAgeEl.value) > 65){
        price = (price * 40 / 100);
    }
    outputFullNameEl.textContent = `Nome Completo: ${fullNameEl.value}`;
    outputKmCounterEl.textContent = `Kilometri da percorrere: ${kmCounterEl.value}`;
    outputPassengerAgeEl.textContent = `Età del passeggero: ${passengerAgeEl.value}`;
    outputPriceEl.textContent = `Prezzo del biglietto: €${price.toFixed(2)}`;
})

