/*
Fordatter: Therese Larsen
Sist endret: 21. september 2022
*/

//Variabler til side
const knapp1 = document.getElementById("knapp1");
const knapp2 = document.getElementById("knapp2");
const knapp3 = document.getElementById("knapp3");

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

let visBilde = false;

//Endre bakgrunnsfarge med fargevelger
document.getElementById("bg-color").addEventListener("change", function (){
    document.body.style.backgroundColor = document.getElementById("bg-color").value;
    console.log(document.getElementById("bg-color").value);

    if (document.getElementById("bg-color").value < '#aaaaaa') {
        document.body.style.color = "#ffffff";
        document.getElementById("heading1").color = "#ffffff";
        
    } else {
        
    }
    
});
// Slutt på fargevelger

// Vis eller skjul bilde

knapp1.addEventListener("click", () => {
    div1.innerHTML = '<img id="bilde1" src="https://media.snl.no/media/22140/article_topimage_Allerton_Garden__Kauai__Hawaii_-_view_into_valley.jpg">';

    if (visBilde === false) {
        knapp1.innerHTML = "Skjul bilde";
        visBilde = true;
    } else {
        knapp1.innerHTML = "Vis bilde";
        div1.innerHTML = "";
        visBilde = false;
        
    }

});
// Slutt på vis eller skjul bilde

//Lag bokser
knapp2.addEventListener("click", () => {
    lagBokser();
})

function lagBokser() {
    div2.innerHTML="";
    let antall = prompt("Hvor mange bokser vil du lage?","Fyll inn antall");
    // console.log("Antall bokser:",antall);

    for (let i = 1; i <= antall; i++) {
        let box = document.createElement("div");
        box.id = "box"+i;
        box.style.width="40px";
        box.style.height="40px";
        box.style.marginLeft="5px";
        box.style.marginTop="5px";
        box.style.padding="10px";
        box.style.border="2px solid silver";
        box.style.cssFloat="left";
        box.style.backgroundColor="#efefef";
        div2.appendChild(box);

        box.appendChild(document.createTextNode(i));

        document.getElementById("box"+i).addEventListener("click", function () {
            markerBoks(i);
        });
        document.getElementById("box"+i).addEventListener("dblclick", function () {
            fjernBoks(i);
        });
    }
}
// Slutt på bokser

let markert = [];

//Marker boksene

function markerBoks(i) {
    let box = document.getElementById("box"+i);
    
    if (!markert[i]) {
        box.style.backgroundColor="#333";
        box.style.color="#fff";
        markert[i] = true;
    } else {
        box.style.backgroundColor="#efefef";
        box.style.color="#000000";
        markert[i] = false;
    }
};
// Slutt på marker boksene

//Fjerne bokser
function fjernBoks(i) {
    document.getElementById("box"+i).remove();
    
}

// Søk og hente firmainformasjon fra brreg

knapp3.addEventListener("click", hentFirmaInput);
function hentFirmaInput() {
    div1.innerHTML='<label for "brregsok">Søk i enhetsregisreret:</label> '+
    '<input type="text" id="brregsok" placeholder="Søk etter navn eller organisasjonsnummer">' +
    ' <button id="send">Søk</button>';

    div2.innerHTML = "";
    document.getElementById("brregsok").focus();

    document.getElementById("send").addEventListener("click", hentFirma);

};

// Slutt på firmainformasjon

// Start på hentFirma
function hentFirma() {

    if (!document.getElementById("brregsok").value == "") {

let query = "https://hotell.difi.no/api/json/brreg/enhetsregisteret?query=" + document.getElementById("brregsok").value;
console.log(query);

div2.innerHTML='<table id="tabell" class="tabell"><tr><th>Navn</th><th>Orgnr</th><th>Forretningsadresse</th></tr></table>';

fetch(query)
    .then(resp => resp.json())
    .then(data => {
        let enheter = data.entries;
        return enheter.map( a => {
            let tr = tabell.insertRow();
            let navnData = tr.insertCell(0);
            navnData.innerHTML= a.navn;
            navnData.className = "td";
            let orgnrData = tr.insertCell(1);
            orgnrData.innerHTML = a.orgnr;
            orgnrData.className = "td";
            let postSted = tr.insertCell(2);
            postSted.innerHTML = a.forretningsadr;
            postSted.className = "td";
        })

    })
    .catch(function(error) {
        console.error("Noe gikk galt...",error)
    })

};
}
// Slutt på hentFirma