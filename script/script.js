// JS is to make the text editable for demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier!
var h1 = document.querySelector("h1");

h1.addEventListener("input", function () {
  this.setAttribute("data-heading", this.innerText);
});

// window.localStorage.clear();

//REBECCAS ØNSKELISTE

function removeitemarraygirl() {
  // giv dit input felt id 'ritem' eller andet og så ændre det neden under
  x = document.getElementById("pritem").value;
  // her ændre du det ønske på din list som du taster ind
  document.getElementById("pi" + x).innerHTML = "";
  // her sletter den alt det gamle du har gemt, for ikke at gemme tingende oven i hinanden
  window.localStorage.removeItem("pwish");
  // dette er din ønske list items tilføj flere men forsøge at beholde id strukturen
  let pi0 = document.getElementById("pi0").innerHTML; //ønske 1
  let pi1 = document.getElementById("pi1").innerHTML; //ønske 2
  let pi2 = document.getElementById("pi2").innerHTML; //ønske 3
  let pi3 = document.getElementById("pi3").innerHTML; //ønske 4
  let pi4 = document.getElementById("pi4").innerHTML; //ønske 5
  let pi5 = document.getElementById("pi5").innerHTML; //ønske 6
  let pi6 = document.getElementById("pi6").innerHTML; //ønske 7
  let pi7 = document.getElementById("pi7").innerHTML; //ønske 8
  let pi8 = document.getElementById("pi8").innerHTML; //ønske 9
  let pi9 = document.getElementById("pi9").innerHTML;
  // tilføj de extra items id i arrayet neden for
  let pwish = [pi0, pi1, pi2, pi3, pi4, pi5, pi6, pi7, pi8, pi9]; // i dette array står din ønsker
  // nu gemmer vi så listen i local storage
  window.localStorage.setItem("pwish", JSON.stringify(pwish));
}
// når siden loader henter den din list i local storage og gemmer den i wish_storage variablen
let pige_wish_storage = JSON.parse(window.localStorage.getItem("pwish"));
// her er der et for loop der går alle din ønsker igennem og tjekker om der nogen der er blevet fjerne fra listen
for (i = 0; i < pige_wish_storage.length; i++) {
  // hvor den så fjerner de ønsker på hjemmesiden
  document.getElementById("pi" + [i]).innerHTML = pige_wish_storage[i];
}

//VALDEMARS ØNSKELISTE

function removeitemarrayboy() {
  // giv dit input felt id 'ritem' eller andet og så ændre det neden under
  x = document.getElementById("dritem").value;
  // her ændre du det ønske på din list som du taster ind
  document.getElementById("di" + x).innerHTML = "";
  // her sletter den alt det gamle du har gemt, for ikke at gemme tingende oven i hinanden
  window.localStorage.removeItem("dwish");
  // dette er din ønske list items tilføj flere men forsøge at beholde id strukturen
  let di0 = document.getElementById("di0").innerHTML; //ønske 1
  let di1 = document.getElementById("di1").innerHTML; //ønske 2
  let di2 = document.getElementById("di2").innerHTML; //ønske 3
  let di3 = document.getElementById("di3").innerHTML; //ønske 4
  let di4 = document.getElementById("di4").innerHTML; //ønske 5
  let di5 = document.getElementById("di5").innerHTML; //ønske 6
  let di6 = document.getElementById("di6").innerHTML; //ønske 7
  let di7 = document.getElementById("di7").innerHTML; //ønske 8
  let di8 = document.getElementById("di8").innerHTML; //ønske 9
  // tilføj de extra items id i arrayet neden for
  let dwish = [di0, di1, di2, di3, di4, di5, di6, di7, di8]; // i dette array står din ønsker
  // nu gemmer vi så listen i local storage
  window.localStorage.setItem("dwish", JSON.stringify(dwish));
}
// når siden loader henter den din list i local storage og gemmer den i wish_storage variablen
let dreng_wish_storage = JSON.parse(window.localStorage.getItem("dwish"));
// her er der et for loop der går alle din ønsker igennem og tjekker om der nogen der er blevet fjerne fra listen
for (i = 0; i < dreng_wish_storage.length; i++) {
  // hvor den så fjerner de ønsker på hjemmesiden
  document.getElementById("di" + [i]).innerHTML = dreng_wish_storage[i];
}
