/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* const num1 = parseInt(prompt("inserisci il primo numero:"))
const num2 = parseInt(prompt("Inserisci il secondo numero:"))
let maggiore
if(num1>=num2){
  maggiore=num1
}
else{
  maggiore=num2
}
alert(`il numero maggiore è: ${maggiore}`) */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* const numerointero = prompt("inserisci il numero:")
if(numerointero!=5){
  console.log("not equal")

} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* const numdivisibilecinque = parseInt(prompt("inserisci il numero:"))
if(numdivisibilecinque % 5 == 0){
  alert("divisibile per 5")
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* const num1 = parseInt(prompt("inserisci il primo numero:"))
const num2 = parseInt(prompt("Inserisci il secondo numero:"))
if(num1==8 || num2==8 || num1+num2==8 || num1-num2==8){
  alert("corretto")
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
let totalShoppingCart = parseFloat(prompt("valore carrello"))
if(totalShoppingCart>50){
  alert(`il totale da pagare è: ${totalShoppingCart}`)
}
else{
  totalShoppingCart+=10
  alert(`il totale da pagare è: ${totalShoppingCart}`)
}
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


/* let totale
let percentuale
if(totalShoppingCart>50){
  percentuale=totalShoppingCart/100*20
  totale=totalShoppingCart-percentuale

  alert(`il totale da pagare è: ${parseFloat(totale)}`)
}
else{
  totalShoppingCart+=10
  percentuale=totalShoppingCart/100*20
  totale=totalShoppingCart-percentuale
  alert(`il totale da pagare è: ${parseFloat(totale)}`)
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/



/* let num1 = parseInt(prompt("inserisci il primo numero:"))
let num2 = parseInt(prompt("inserisci il secondo numero:"))
let num3 = parseInt(prompt("inserisci il terzo numero:"))
const ordine={
  numero1:"",
  numero2:"",
  numero3:""
}


if(num1>=num2 && num1>=num3 && num2>num3){
  ordine.numero1= num1
  ordine.numero2= num2
  ordine.numero3= num3
}
else if(num1>=num2 && num3>=num2 && num1>=num3){
  ordine.numero1= num1
  ordine.numero2= num3
  ordine.numero3= num2
}
else if(num2>=num1 && num2>=num3 && num1>=num3){
  ordine.numero1= num2
  ordine.numero2= num1
  ordine.numero3= num3
}
else if(num2>=num1 && num2>=num3 && num3>=num1){
  ordine.numero1= num2
  ordine.numero2= num3
  ordine.numero3= num1
}
else if(num3>=num1 && num3>=num2 && num1>=num2){
  ordine.numero1= num3
  ordine.numero2= num1
  ordine.numero3= num2
}
else{
  ordine.numero1= num3
  ordine.numero2= num2
  ordine.numero3= num1
}
alert(`Numeri ordinati ${ordine.numero1},${ordine.numero2},${ordine.numero3}`) */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* let variabile=prompt("inserisci un valore:")
if(typeof variabile == 'number')
{
  alert(typeof variabile)
}
else{
  alert(typeof variabile)
} */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* const numdivisibiledue = parseInt(prompt("inserisci il numero:"))
if(numdivisibiledue % 2 == 0){
  alert("è pari")
}
 */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  


/* let val = 7
  if (5 <= val < 10 ) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    } */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/



 const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
} 
  me.city ="Toronto"
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/


/* delete me.lastName */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/




/* delete me.skills[2] */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/


 const arrayprova=[]
arrayprova.push(1,2,3,4,5,6,7,8,9,10)
console.log(arrayprova) 

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/


/* arrayprova[9]=100 */

const profilo = {
    name: "Mattia",
    surname : "Baietta",
    job : "Web Dev",
    nascita : "21 novembre 1989",
}

let ricerca = prompt("Inserire il campo da cercare")
if(profilo.hasOwnProperty(ricerca)==true){
  prompt("Il valore per " + ricerca + " al momento è " + profilo.getElementsByTagName(ricerca))
  profilo.setAttribute(ricerca)=prompt("In cosa vuoi sostituirlo?")
}
else{
  profilo.setAttribute(ricerca) = prompt("il valore inserito non esiste lo sto creando")
  
}

