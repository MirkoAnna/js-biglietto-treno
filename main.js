//Chiedi all'utente i chilometri da percorrere
let km = parseInt(prompt("Inserisci quanti chilometri vuoi percorrere"))

if (isNaN(km)) {
    alert('Inserisci un valore numerico')
    km = parseInt(prompt("Inserisci quanti chilometri vuoi percorrere"))
}
console.log("Distanza: " + km + "Km")


//Chiedi all'utente l'età
let eta = parseInt(prompt("Inserisci l'età"))

if (isNaN(eta)) {
    alert("Inserisci un valore numerico")
    eta = parseInt(prompt("Inserisci l'età"))
}
console.log("Età: " + eta)


//Il prezzo del biglietto è definito in base ai km (Con mnassimo 2 decimali)
let prezzo = 0.21 * km
console.log("Prezzo biglietto: " + prezzo.toFixed(2))



//SCONTI

/*va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/
var sconto20 = - prezzo / 100 * 20 + prezzo
var sconto40 = - prezzo / 100 * 40 + prezzo

//Sconto per minorenni
if (eta < 18) {
    prezzo = sconto20
//Sconto per over 65
} else if (eta >= 65) {
    prezzo = sconto40
} else {
    console.log("Nessuno sconto applicato")
}
console.log("Prezzo biglietto: " + prezzo)

//html
document.getElementById("biglietto").innerHTML = "Il prezzo del tuo biglietto è di €: " + prezzo