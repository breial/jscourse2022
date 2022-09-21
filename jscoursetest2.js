// const tekst1 = "Dette er tekst 1";
// let tekst2 = "Dette er tekst 2, kortversjonen er at let is the new var, den har bedre scope, blocklevelscope";
// var tekst3 = "Dette er tekst 3";

// tekst2 = "Nå er innholdet i tekst2 endret";

// console.log(tekst1+tekst2+"\n"+tekst3);

// console.log('\xA9');

// let x = 123e5;

// console.log(x);

// let a = 1;
// let b = a++;
// console.log(a);
// console.log(b);

// console.log(a+=5);
// console.log(a--);


//VI skal se mer på dato etter hvert

// let dato = new Date();
// console.log(dato);

//VI skal se mer på dato etter hvert

// let cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]);

// VI kan lage løkker som looper gjennom hele

//---

//BOOLEAN

// console.log(Boolean(10 > 9));
//Bruke til å teste om noe er riktig eller ikke

//---

// function square(number) {
//     return number * number;
// }

// console.log(square(16));

//Setter 16 inn som parameter og da får vi value

//---

//PATH ARROW
// square = x => x * x; // DENNE HAR BARE ÉN, da slipper man klammer rundt x
// product = (x,y) => { 
//     return x * y;     // Denne lar vi være på to linjer, da trenger vi krølleklammer og ordet return
// }
// siHei = () => {
//     return "Hællæpårei";
// }
// console.log(square(16));
// console.log(product(16,12));
// console.log(siHei);

//---

let num = new Number(7.1234567);
// WAIT denne gikk jeg glipp av

// Stringer
// let re = /epler/gi; 
// let str = "Epler er runde og epler er saftige."; 
// let nystr = str.replace(re, "appelsiner"); 
// console.log(nystr); 

// NICE

//Gjør om til store bokstaver
// const tekst1 = "Dette er en tekst som inneholder æøå";
// const storeBokstaver = tekst1.toUpperCase();
// console.log(storeBokstaver);

//Kaller sånneGreierFor camelcase, fordi det er store bokstaver som gir humper bortover

// const tekst2 = "     Tekst med ekstra mellomrom      ";

// console.log(tekst2);

// console.log(tekst2.trim());

// Lister (eller arrays) står i klammer

//Split og join er fint når man skal behandle data, kan splitte på semikolon og joine med komma
// let tegn = "Dette er en setning;med bokstaver og mellomrom".split(';').join(',');

// console.log(tegn);

// TERNARY er en veldig fin greie som har en condition og to variabler (?)
// Er pris større enn 1? Kroner : krone --- jo mindre man skriver, desto bedre

// Array viktig, la oss fokusere

// let dyr = ['ku', 'okse', 'hund', 'katt'];

// console.log("Antall dyr",dyr.length);

// dyr.forEach(d => console.log("Dyrt er",d));

// push og pop legger til og fjerner fra slutten på en array

// dyr.push('and');
// dyr.forEach(d => console.log("Dyret er en",d));

// shift og unshift legger til og fjerner elementer på begynnelsen

// dyr.unshift('svane');
// dyr.forEach(d => console.log("Dyret er en",d));

// L
// console.log("-".repeat(40));
// console.log(dyr.join(', '));

// console.log(dyr.toString());

// dyr.splice(2,0,'sebra');

// dyr.splice(2,2);

// console.log(dyr);



// DAG 2 -----------------------------------------
// DENNE VAR LITT VRIEN
// let tall = [23,54,23,54,67,87];

// for (let i = 0; i < 101; i++) {
//     console.log("Tallet er nå",i);

// }
// let a = 10;
// while (a < tall.lenght) {
//     console.log(tall[a]);
//     a++;
// }

// a = 0;
// do {
//     console.log("Løkken kjører");
//     console.log(tall[a]);
//     a++;
// } while (a < tall.lenght);

// FOR.. IN OG FOR.. OF
// var dager = ['Søndag', 'Mandag', 'Tirsdag'];
// for (let dag in dager) {
//     console.log(dag);
// }

// for (let dag of dager) {
//     console.log(dag);
// }

let kalender = {
    "Søndag" : "Fri",
    "Mandag" : "Kursdag",
    "Tirsdag" : "Andre kursdag",
}
for (let dag of kalender) {
    console.log(dag);
}

// MANGLET Å PRINTE UT DENNE FORDI DET GIKK FOR FORT

