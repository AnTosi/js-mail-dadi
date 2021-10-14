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

const mailList = ["queutricaweicre-6784@yopmail.com", "quacrappeullaho-9067@yopmail.com",               "xoidexatrefe-8363@yopmail.com", "mail@fabiopacifici.com", "hello@tizianonicolai.com", "cane", "fabiola.gardin.85@gmail.com"];



// secondo me così dovrebbe funzionare ma mi stampa il placeholder invece che il contenuto
document.getElementById("click").addEventListener ("click", function(){
    const userMail = document.getElementById("userMail");
    const mailValue = userMail.value;
    console.log(mailValue);
})





    