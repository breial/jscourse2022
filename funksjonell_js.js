// Et enkelt array med json-objekter. Nå er vi i objektorientering og funksjonell utvikling.
let dyr = [
    {"navn":"Petter","art":"potet","alder":4},
    {"navn": "Kari","art":"enhjørning","alder":7},
    {"navn":"Truls","art":"larve","alder":8}
];

//Vi skal nå bruke map
dyr.map( d => d.navn+" er en "+d.art+" som er "+d.alder+" år gammel")

console.log(dyr.map( d => d.navn+" er en "+d.art+" som er "+d.alder+" år gammel"));

console.log("-".repeat(40));

dyr.forEach(x => console.log(x.navn,"er en",x.art));