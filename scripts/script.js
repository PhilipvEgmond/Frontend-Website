// JavaScript Document


// Laat pagina zien als het geladen is
var bodyElement = document.querySelector("body");
var flashElement = document.querySelector("body span:nth-of-type(1)"); 

function fade() {
    flashElement.classList.add("fade"); 
}

window.addEventListener("load", fade);
