/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

1) stringa ===> assegna un valore testuale e si indica racchiudendo i caratteri tra " " o ' '.
2) numero ===> assegna un valore numerico. 
3) valore booleano ===> assegna un valore true o false. 
4) undefined ===> valore non assegnato.
5) null ===> assegna valore nullo.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName='Claudia'
console.log('il mio nome è', myName) /*il mio nome è Claudia*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20. 
 */

 let n1= 12
 let n2= 20
 let n3= n1+n2 
 console.log('12+20 fa',n3) /*12+20 fa 32*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x= 12
console.log('il valore di x è', x) /*il valore di x è 12*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName='Burali'
console.log(myName) /*il mio nome è Burali*/

const name='claudia'
console.log('il mio nome è', name) /*il mio nome è claudia*/

/* name='cla' *ERRORE*

console.log('il mio nome è', name) *ERRORE*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let n= 4-x
console.log('4 - x fa', n)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1= 'jonh'
let name2= 'Jonh'
console.log(name1 !== name2) /*true*/
console.log(name1===name1) /*true*/


