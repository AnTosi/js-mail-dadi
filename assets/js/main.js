// esercizio in 2 fasi:

//** fase 1: Mail  
//chiedi all'utente mail e controlla se rientra nella lista (array)
//se rientra nella lista messaggio esito positivo, sennò negativo
//
//strumenti:
//const varie
//array (lista mail del mio elenco)
//bottone input per inserire mail
//event listener per "dire" al sistema che ho inserito la mail
//if mail inserita è in elenco ---> esito positivo, else -----> esito negativo

const mailList = ["queutricaweicre-6784@yopmail.com", "quacrappeullaho-9067@yopmail.com", "xoidexatrefe-8363@yopmail.com", "mail@fabiopacifici.com", "hello@tizianonicolai.com", "cane", "cane@gmail.com", "fabiola.gardin.85@gmail.com"];
console.log(mailList.length);
let listLength = mailList.length;
console.log(listLength)


const result = document.getElementById("result")



// secondo me così dovrebbe funzionare ma mi stampa il placeholder invece che il contenuto
// risolto con value

document.getElementById("click").addEventListener ("click", function(){   
    const userMail = document.getElementById("userMail");
    const mailValue = userMail.value;
    if (mailList.includes(mailValue)) {
        console.log ("bentornato");
        result.innerHTML = "Bentornato";
    } else {
        console.log ("non puoi entrare")
        result.innerHTML = "Non puoi entrare";
    }

    document.getElementById("yourMail").innerHTML = `La mail da te inserita è "${mailValue}"`;
})


// metto la funzione per vedere se array contiene mail inserita

// lo commento perché sono costretto ad utilizzare l'altro, visto che questa funzione quando vera mi restituisce un valore positivo ma anche gli altri 7 negativi, quindi non riesco ad ottenere il risultato che voglio

// document.getElementById("click").addEventListener ("click", function () {
//     const userMail = document.getElementById("userMail");
//     const mailValue = userMail.value;
//     for (let i = 0; i < listLength; i++) {
//         if (mailList[i] === mailValue) {
//             result.innerHTML = "Bentornato";
            
//         } else {
//             result.innerHTML = "Non puoi entrare";
//         }
//     }
// }
// )




// provo con includes
// sono riuscito mettendo includes all'intero del precedente event listener, forse nell'altra funzione mi dava la roba undefined perché la generavo con lo stesso click con cui la utilizzavo nella funzione stessa




//mi sono bloccato qua sopra perché mi dà mailList ins undefined

//mi dice "mailList is declared but it's value is never read", non riesco a capire perché



// metto l'if, potevo concatenarlo e sarebbe stato meglio ma già mi intrico così

// non so se mettere due event listener, che uno mi serve sopra e uno sotto e non credo funzioni se li accorpo, ma non so se ne metto due se con un click me li attiva entrambi, forse dovrei concatenarlo (o mi ritrovo con la funzione definita dopo, o mi ritrovo con la costante definita dopo)




// qua cominciano i dadi, devo generare due numeri on click e decidere chi vince

//strumenti
//button con eventlistener
//generatore math random per numero da 1 a 6
//if per decidere vincitore

document.getElementById("diceThrow").addEventListener("click", function() {

    // tiro i dadi con i random e li stampo a schermo con il click e prima dell'if
    let userNumber = Math.floor(Math.random () * 6) + 1;
        document.getElementById("yourScore").innerHTML = (`Hai fatto ${userNumber}!`);
    let pcNumber = Math.floor(Math.random() * 6) + 1;
        document.getElementById("pcScore").innerHTML = (`Il PC ha fatto ${pcNumber}!`);

    //qua confronto i punteggi con l'if >, < e = e stampo l'esito in ogni caso a schermo
    if (userNumber > pcNumber) {
        document.getElementById("winner").innerHTML = ("HAI VINTO!!!!");
    } else if (userNumber < pcNumber) {
        document.getElementById("winner").innerHTML = ("Hai perso...");
    } else {
        document.getElementById("winner").innerHTML = ("Pari");
    }
}
)

    