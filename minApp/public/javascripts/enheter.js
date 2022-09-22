div1.innerHTML='<label for "brregsok" class="text-muted pb-2">Søket fetcher Brønnøysundregisteret sitt åpne api:</label> '+
'<input type="text" id="brregsok" class="form-control" placeholder="Søk etter navn eller organisasjonsnummer">' +
' <button id="send" type="button" class="btn btn-success mt-2">Søk</button>';

div2.innerHTML = "";
document.getElementById("brregsok").focus();

document.getElementById("send").addEventListener("click", hentFirma);
// Slutt på firmainformasjon

// Start på hentFirma
function hentFirma() {

if (!document.getElementById("brregsok").value == "") {

let query = "https://hotell.difi.no/api/json/brreg/enhetsregisteret?query=" + document.getElementById("brregsok").value;
console.log(query);

div2.innerHTML='<table id="tabell" class="table"><tr><th>Navn</th><th>Orgnr</th><th>Forretningsadresse</th></tr></table>';

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