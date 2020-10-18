// JavaScript Document
var currentAlbum = 3;


// Laat pagina zien als het geladen is
var bodyElement = document.querySelector("body");
var flashElement = document.querySelector("body span:nth-of-type(1)"); 

function fade() {
    flashElement.classList.add("fade"); 
}

window.addEventListener("load", fade);



// Video controls
var videoEm = document.querySelector("video.active");
var spanTime;

var span1 = document.querySelector("section:nth-of-type(1) span:nth-of-type(1)");
var span2 = document.querySelector("section:nth-of-type(1) span:nth-of-type(2)");
var span3 = document.querySelector("section:nth-of-type(1) span:nth-of-type(3)");
var span4 = document.querySelector("section:nth-of-type(1) span:nth-of-type(4)");

// Wanneer je op de spans binnen de video klikt speelt het een interval af
function playVid() {
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
var album3 = ["media/v31.mp3", "media/v32.mp3", "media/v33.mp3", "media/v34.mp3", "media/v35.mp3"]
var song;

// Speelt random mp3 af van actieve album
function randomSong() {
    switch(currentAlbum) {
        case 3:
            song = new Audio(album3[Math.floor(Math.random() * album3.length)]);
            song.play();
        break;
    }
}

function playRandom() {
    randomSong();    

    // pakt een random interval om af te spelen
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

