// // Et enkelt array med json-objekter. Nå er vi i objektorientering og funksjonell utvikling.
// let dyr = [
//     {"navn":"Petter","art":"potet","alder":4},
//     {"navn":"Peik","art":"potet","alder":5},
//     {"navn": "Kari","art":"enhjørning","alder":7},
//     {"navn":"Truls","art":"larve","alder":8}
// ];

// // Hent deler av et JSON-objekt med map

// dyr.map( d => d.navn+" er en "+d.art+" som er "+d.alder+" år gammel")

// console.log(dyr.map( d => d.navn+" er en "+d.art+" som er "+d.alder+" år gammel"));

// console.log("-".repeat(40));

// dyr.forEach(x => console.log(x.navn,"er en",x.art));

// // Hvis jeg bare vil se dyrenavn - et nytt array som bare viser navn. Mapper et element
// // Et array med arrays er å ha to x inni her
// let dyrenavn = dyr.map(x => [x.navn,x.alder]);

// console.log(dyrenavn);

// // Hva hvis jeg vil ha dette ut som tekst og ikke array? Da bruker vi join
// console.log(dyrenavn.join("\n"));

// console.log("-".repeat(40));

// // Filter - denne vil kun vise den som er potet
// dyr.filter(a => a.art=="potet").forEach(a => console.log(a.navn));

// console.log("-".repeat(40));

// // To likhetstegn sjekker
// // Tre likhetstegn setter den til å være det.

// const kattenavn = dyr.filter(a => a.art=="potet").map(x =>x.navn).sort().reverse();

// console.log(kattenavn);

// console.log("-".repeat(40));

// // La oss se på reduce

// let snittalder = dyr.map(a => a.alder).reduce((a,b) => (a + b)) / dyr.length;

// console.log("Snittalder: "+snittalder);

// console.log("-".repeat(40));

// Nå skal vi kose oss med bankapplikasjon

// let konto = [

//     { "nummer": 1001, "transaksjon": 600 },
//     { "nummer": 1002, "transaksjon": 300 },
//     { "nummer": 1002, "transaksjon": 700 },
//     { "nummer": 1001, "transaksjon": -200 },
//     { "nummer": 1001, "transaksjon": -600 },
//     { "nummer": 1001, "transaksjon": 6000 },
// ]

// let saldo_1001 = konto.filter( a => a.nummer == 1001).map( a => a.transaksjon).reduce((a,b) => a+b);

// console.log(saldo_1001);

// //Hint: ikke begynn en variabel med tall
// let t1002_01 = konto.find( a => a.nummer == 1002).transaksjon;

// console.log(t1002_01);
// Denne viser den første transaksjonen til konto 1002
// Kan ikke kjede find,dog. Det ekke en higher order function.
// Men syntaksen er lik. 


// Nå lager vi en artig liten funksjon
// let tellNed = (num) => {
//     if(num == 0) return;
//     console.log(num);
//     tellNed(num -1);
// }

// tellNed(10);

//Neste store oppgave, objektorientert programmering (OOP)

let t = {};
let tt = new Object();
//To måter å lage objekt på

t.navn = "Terje Berg-Hansen";
t.adresse = {};
t.adresse.gate = "Gatenavn";
t.adresse.postnr = 1234;
t.adresse.poststed = "By";
t.telefon = ['999 00 999','22002200'];
t.signatur = function() {
    return this.navn+"\n"+this.adresse.gate
}

console.log(t.signatur());
//På denne måten kan vi legge til ting i et objekt