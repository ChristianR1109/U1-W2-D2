/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*let n1 = prompt("Inserisci il primo valore");
let n2 = prompt("Inserisci il secondo valore");
if (n1 > n2) {
  console.log("Il valore maggiore è il primo inserito, ovvero : ", n1);
} else {
  console.log("Il valore maggiore è il secondo inserito, ovvero : ", n2);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*let n3 = prompt("Inserisci un valore : ");
if (n3 != 5) {
  console.log("not equal");
} else {
  console.log("il numero inserito è uguale a 5");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*let n4 = prompt("Inserisci un valore : ");
if (n4 % 5 == 0) {
  console.log("Il numero è divisibile per 5 ");
} else {
  console.log("Il numero non è divisibile per 5 ");
}/*
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.

/* SCRIVI QUI LA TUA RISPOSTA */

/*let n5 = Number(prompt("Inserisci il primo valore intero : "));
let n6 = Number(prompt("Inserisci il secondo valore intero : "));
if (n5 == 8 && n6 == 8) {
  console.log("Entrambi i valori sono uguali a 8 ");
} else if (n5 == 8) {
  console.log("Il primo valore è uguale a 8");
} else if (n6 == 8) {
  console.log("Il secondo valore è uguale a 8");
}

let addition = n5 + n6;
let subtraction = n5 - n6;

if (n5 + n6 == 8 && n5 + n6 == 8) {
  console.log("L'addizione e la sottrazione dei due numeri è pari a 8 ");
} else if (addition == 8) {
  console.log("L'addizione dei due numeri è pari a 8 ");
} else if (subtraction == 8) {
  console.log("la sottrazione tra i due numeri è pari a 8");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*let totalShoppingCart = Number(prompt("Inserisci il saldo totale del carrello "));
let totale;
if (totalShoppingCart > 50) {
  totale = totalShoppingCart;
} else {
  totale = totalShoppingCart + 10;
}
console.log("L'ammontare da pagare è : ", totale);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*let totalShoppingCart2 = Number(prompt("Inserisci il saldo totale del carrello "));
let totale2;
totalShoppingCart2 = totalShoppingCart2 * 0.8;
console.log(totalShoppingCart2);
if (totalShoppingCart2 > 50) {
  totale2 = totalShoppingCart2;
} else {
  totale2 = totalShoppingCart2 + 10;
}
console.log("L'ammontare da pagare è : ", totale2);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*let num1 = Number(prompt("Inserisci il primo numero "));
let num2 = Number(prompt("Inserisci il secondo numero "));
let num3 = Number(prompt("Inserisci il terzo numero "));
let primo;
let secondo;
let terzo;

if (num1 > num2 && num1 > num3) {
  primo = num1;
} else if (num2 > num1 && num2 > num3) {
  primo = num2;
} else {
  primo = num3;
}
if (primo == num1) {
  if (num2 > num3) secondo = num2;
  terzo = num3;
} else {
  secondo = num3;
  terzo = num2;
}

if (primo == num2) {
  if (num1 > num3) secondo = num1;
  terzo = num3;
} else {
  secondo = num3;
  terzo = num1;
}

if ((primo = num3)) {
  if (num2 > num1) secondo = num2;
  terzo = num1;
} else {
  secondo = num1;
  terzo = num2;
}
console.log(primo, secondo, terzo);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*console.log(typeof 2);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*let x = Number(prompt("Inserisci il primo numero "));
if (x % 2 == 0) {
  console.log("Il numero è pari ");
} else {
  console.log("il numero è dispari");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */
/*let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
  
};

/* SCRIVI QUI LA TUA RISPOSTA */
/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const prova = [];
prova.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(prova);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let prova = [];
prova.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const lastindex = prova.length - 1;

prova.splice(lastindex, 1, 100);

console.log(prova);
