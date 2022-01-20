//Chiedi all'utente i chilometri da percorrere
let km = parseInt(prompt("Inserisci quanti chilometri vuoi percorrere"));

if (isNaN(km)) {
    alert('Inserisci un valore numerico')
    km = parseInt(prompt("Inserisci quanti chilometri vuoi percorrere"))
}
console.log("Distanza: " + km + "Km");


//Chiedi all'utente l'età
let eta = parseInt(prompt("Inserisci l'età"));

if (isNaN(eta)) {
    alert("Inserisci un valore numerico")
    eta = parseInt(prompt("Inserisci l'età"));
}
console.log("Età: " + eta)


//Il prezzo del biglietto è definito in base ai km (Con mnassimo 2 decimali)
let prezzo = 0.21 * km
console.log(prezzo.toFixed(2))