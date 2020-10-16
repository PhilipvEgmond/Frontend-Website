// JavaScript Document


// Laat pagina zien als het geladen is
var bodyElement = document.querySelector("body");
var flashElement = document.querySelector("body span:nth-of-type(1)"); 

function fade() {
    flashElement.classList.add("fade"); 
}

window.addEventListener("load", fade);


// Video controls
var videoEm = document.querySelector("video");
var span1 = document.querySelector("section:nth-of-type(1) span:nth-of-type(1)");
var span2 = document.querySelector("section:nth-of-type(1) span:nth-of-type(2)");
var span3 = document.querySelector("section:nth-of-type(1) span:nth-of-type(3)");
var span4 = document.querySelector("section:nth-of-type(1) span:nth-of-type(4)");

function play1() {
    videoEm.currentTime = 0;
    videoEm.play();
    setTimeout(() => {
        videoEm.pause();
    },3000);
}

function play2() {
    videoEm.currentTime = 3;
    videoEm.play();
    setTimeout(() => {
        videoEm.pause();
    },3000);
}

function play3() {
    videoEm.currentTime = 9;
    videoEm.play();
    setTimeout(() => {
        videoEm.pause();
    },3000);
}

function play4() {
    videoEm.currentTime = 6;
    videoEm.play();
    setTimeout(() => {
        videoEm.pause();
        videoEm.currentTime = 0;
    },3000);
}

span1.addEventListener("click", play1);
span2.addEventListener("click", play2);
span3.addEventListener("click", play3);
span4.addEventListener("click", play4);