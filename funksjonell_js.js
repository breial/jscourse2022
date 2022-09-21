// Et enkelt array med json-objekter. Nå er vi i objektorientering og funksjonell utvikling.
let dyr = [
    {"navn":"Petter","art":"potet","alder":4},
    {"navn":"Peik","art":"potet","alder":5},
    {"navn": "Kari","art":"enhjørning","alder":7},
    {"navn":"Truls","art":"larve","alder":8}
];

// Hent deler av et JSON-objekt med map

dyr.map( d => d.navn+" er en "+d.art+" som er "+d.alder+" år gammel")

console.log(dyr.map( d => d.navn+" er en "+d.art+" som er "+d.alder+" år gammel"));

console.log("-".repeat(40));

dyr.forEach(x => console.log(x.navn,"er en",x.art));

// Hvis jeg bare vil se dyrenavn - et nytt array som bare viser navn. Mapper et element
// Et array med arrays er å ha to x inni her
let dyrenavn = dyr.map(x => [x.navn,x.alder]);

console.log(dyrenavn);

// Hva hvis jeg vil ha dette ut som tekst og ikke array? Da bruker vi join
console.log(dyrenavn.join("\n"));

console.log("-".repeat(40));

// Filter - denne vil kun vise den som er potet
dyr.filter(a => a.art=="potet").forEach(a => console.log(a.navn));

console.log("-".repeat(40));

// To likhetstegn sjekker
// Tre likhetstegn setter den til å være det.

const kattenavn = dyr.filter(a => a.art=="potet").map(x =>x.navn).sort().reverse();

console.log(kattenavn);