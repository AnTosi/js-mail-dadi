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

let mailList = ["queutricaweicre-6784@yopmail.com", "quacrappeullaho-9067@yopmail.com",               "xoidexatrefe-8363@yopmail.com", "mail@fabiopacifici.com", "hello@tizianonicolai.com", "cane", "cane@gmail.com", "fabiola.gardin.85@gmail.com"];
console.log(mailList.length);



// secondo me così dovrebbe funzionare ma mi stampa il placeholder invece che il contenuto
// risolto con value
document.getElementById("click").addEventListener ("click", function(){
    const userMail = document.getElementById("userMail");
    const mailValue = userMail.value;
    console.log(mailValue);
})

// metto la funzione per vedere se array contiene mail inserita
document.getElementById("click").addEventListener ("click", function containsObject(mailValue, mailList) {
    for (var i = 0; i < mailList.length; i++) {
        if (mailList[i] === mailValue) {
            console.log("bentornato");
        } else {
        console.log("non puoi entrare");
        }
    }
}
)

//mi sono bloccato qua sopra perché mi dà mailList ins undefined



// metto l'if, potevo concatenarlo e sarebbe stato meglio ma già mi intrico così

// non so se mettere due event listener, che uno mi serve sopra e uno sotto e non credo funzioni se li accorpo, ma non so se ne metto due se con un click me li attiva entrambi, forse dovrei concatenarlo (o mi ritrovo con la funzione definita dopo, o mi ritrovo con la costante definita dopo)






    