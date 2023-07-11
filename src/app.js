// script.js
let pronoun = [
  "el",
  "nuestro",
  "mi",
  "tu",
  "su",
  "ese",
  "mi propio",
  "cada",
  "todo",
  "algún",
];
let adj = [
  "gran",
  "grande",
  "increíble",
  "pequeño",
  "hermoso",
  "rojo",
  "brillante",
  "fantastico",
  "poderoso",
  "sabio",
];
let noun = [
  "corredor",
  "mapache",
  "sitio",
  "ciudad",
  "proyecto",
  "jardín",
  "tesoro",
  "robot",
  "pensamiento",
  "destino",
];

let domainList = document.getElementById("domainList");
let domainHTML = "";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let domain = pronoun[i] + adj[j] + noun[k] + ".com";
      domainHTML += "<li>" + domain + "</li>";
    }
  }
}

domainList.innerHTML = domainHTML;
