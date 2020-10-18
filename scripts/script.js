// JavaScript Document


// Laat pagina zien als het geladen is
var bodyElement = document.querySelector("body");
var flashElement = document.querySelector("body span:nth-of-type(1)"); 

function fade() {
    flashElement.classList.add("fade"); 
}

window.addEventListener("load", fade);


// Next/previous album
var currentAlbum = 3;
var headerH2 = document.querySelector("header h2");
var previousButton = document.querySelector("section:nth-of-type(1) button:nth-of-type(1)");
var nextButton = document.querySelector("section:nth-of-type(1) button:nth-of-type(2)");
var bodyClasses = ["v1", "v2", "v3", "v4"];
var video;
var albumNav;

function goBack() {
    // Selecteert huidige video en album nav element
    video = document.querySelector("video:nth-of-type(" + currentAlbum + ")");
    albumNav = document.querySelector("#redirect li:nth-of-type(" + currentAlbum + ")");

    if(currentAlbum > 1) {
        // Haalt de active classes van de elementen af
        bodyElement.classList.remove(bodyClasses[currentAlbum - 1]);
        video.classList.remove("active");
        albumNav.classList.remove("active");

        // Verlaagt current album en selecteert video en nav opnieuw
        currentAlbum--;
        video = document.querySelector("video:nth-of-type(" + currentAlbum + ")");
        albumNav = document.querySelector("#redirect li:nth-of-type(" + currentAlbum + ")");
        
        // Voegt de classes toe aan de nieuwe elementen en veranderd de h2
        bodyElement.classList.add(bodyClasses[currentAlbum - 1]);
        video.classList.add("active");
        albumNav.classList.add("active");
        headerH2.innerHTML = "Vol. " + currentAlbum;
    } else {
        return;
    }
}

function toNext() {
    video = document.querySelector("video:nth-of-type(" + currentAlbum + ")");
    albumNav = document.querySelector("#redirect li:nth-of-type(" + currentAlbum + ")");
    if(currentAlbum < 4) {
        bodyElement.classList.remove(bodyClasses[currentAlbum - 1]);
        video.classList.remove("active");
        albumNav.classList.remove("active");

        currentAlbum++  ;
        video = document.querySelector("video:nth-of-type(" + currentAlbum + ")");
        albumNav = document.querySelector("#redirect li:nth-of-type(" + currentAlbum + ")");
        
        bodyElement.classList.add(bodyClasses[currentAlbum - 1]);
        video.classList.add("active");
        albumNav.classList.add("active");
        headerH2.innerHTML = "Vol. " + currentAlbum;

        // Als current album 4 is komt coming soon erbij
        if(currentAlbum === 4) {
            headerH2.innerHTML = "Vol. " + currentAlbum + " (coming soon)";
        }
    } else {
        return;
    }
}

previousButton.addEventListener("click", goBack);
nextButton.addEventListener("click", toNext);


// Video controls
var videoEm = document.querySelector("video.active");
var spanTime;

var span1 = document.querySelector("section:nth-of-type(1) span:nth-of-type(1)");
var span2 = document.querySelector("section:nth-of-type(1) span:nth-of-type(2)");
var span3 = document.querySelector("section:nth-of-type(1) span:nth-of-type(3)");
var span4 = document.querySelector("section:nth-of-type(1) span:nth-of-type(4)");

// Wanneer je op de spans binnen de video klikt speelt het een interval af
function playVid() {
    videoEm = document.querySelector("video.active");
    videoEm.currentTime = spanTime;
    videoEm.play();
    setTimeout(() => {
        videoEm.pause();
        videoEm.currentTime = 0;
    }, 3000);
}

function play1() {
    spanTime = 0;
    playVid();
    randomSong();
}

function play2() {
    spanTime = 3;
    playVid();
    randomSong();
}

function play3() {
    spanTime = 9;
    playVid();
    randomSong();
}

function play4() {
    spanTime = 6;
    playVid();
    randomSong();
}

span1.addEventListener("click", play1);
span2.addEventListener("click", play2);
span3.addEventListener("click", play3);
span4.addEventListener("click", play4);


// Muziek 
var soundButton = document.getElementById("soundButton");
var album1 = ["media/v11.mp3", "media/v12.mp3", "media/v13.mp3", "media/v14.mp3", "media/v15.mp3"];
var album2 = ["media/v21.mp3", "media/v22.mp3", "media/v23.mp3", "media/v24.mp3", "media/v25.mp3"];
var album3 = ["media/v31.mp3", "media/v32.mp3", "media/v33.mp3", "media/v34.mp3", "media/v35.mp3"];
var album4 = ["media/v41.mp3", "media/v42.mp3", "media/v43.mp3", "media/v44.mp3", "media/v45.mp3"];
var song;

// Speelt random mp3 af van actieve album
function randomSong() {
    switch(currentAlbum) {
        case 1:
            song = new Audio(album1[Math.floor(Math.random() * album1.length)]);
            song.play();
        break;

        case 2:
            song = new Audio(album2[Math.floor(Math.random() * album2.length)]);
            song.play();
        break;

        case 3:
            song = new Audio(album3[Math.floor(Math.random() * album3.length)]);
            song.play();
        break;

        case 4:
            song = new Audio(album4[Math.floor(Math.random() * album4.length)]);
            song.play();
        break;
    }
}

// pakt een random interval om af te spelen
function playRandom() {
    let random = Math.floor(Math.random() * 4 + 1);
    switch(random) {
        case 1:
            play1();
        break;

        case 2:
            play2();
        break;

        case 3:
            play3();
        break;

        case 4:
            play4();
        break;
    }

}

soundButton.addEventListener("click", playRandom);

