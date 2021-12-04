// JS is to make the text editable for demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier!
var h1 = document.querySelector("h1");

h1.addEventListener("input", function () {
  this.setAttribute("data-heading", this.innerText);
});

localStorage.setItem("name", "John Doe");
document.getElementById("demo").innerHTML = localStorage.getItem("name");
