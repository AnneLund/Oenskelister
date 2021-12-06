// JS is to make the text editable for demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier!
var h1 = document.querySelector("h1");

h1.addEventListener("input", function () {
  this.setAttribute("data-heading", this.innerText);
});

function myFunction() {
  // Udregner resultatet fra input-feltet med ID'et value.
  let x = document.getElementById("numb").value;
  // Hvis x ikke er et tal, eller hvis det er under 1 og over 10:
  let text;
  if (isNaN(x) || x < 1 || x > 9) {
    text = "Nummeret findes ikke";
  }

  // Hvis tallet er mellem 1-10:
  else {
    text = "Tak!";
  }
  document.getElementById("demo").innerHTML = text;
  result = x;

  console.log(result);
}

function myFunctiontwo() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numbtwo").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 8) {
    text = "Nummeret findes ikke";
  } else {
    text = "Tak!";
  }
  document.getElementById("demotwo").innerHTML = text;

  result = x;

  console.log(result);
}
