const loaderContainer = document.querySelector('.loader-container');
window.addEventListener('load', function () {
    setTimeout(() => {
        loaderContainer.classList.add('hidden');
        setTimeout(() => {
            loaderContainer.classList.add('gone');
            alert("Welcome Zombrade, I suggest you open in pc browser, coz I didn't make this for mobile phone XD")
        }, 1000);
    }, 5000);
})


const ollie = document.querySelectorAll('.ollie');
const hole = document.querySelectorAll('.hole');
const totalScore = document.querySelector('#score');
const hitSound = document.querySelector('#hitSound');
const bgm = document.querySelector('#music');

bgm.pause();
bgm.currentTime = 0;

let previousHole;
let finish;
let score;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(ollie){
    //need to find random number for index according how many ollie I have
    const h = Math.floor(Math.random() * ollie.length);
    //use founded index to choose certain "hole" element
    const hRandom = ollie[h];
    if(hRandom == previousHole){
        randomHole(ollie);
    }
    previousHole = hRandom;
    return hRandom;
}

function showingOllie(){
    //for random ollie image || 5 is total of ollie asset I have
    const ollieImage = (Math.floor(Math.random() * 5))+1;
    //h = hole, t = time
    const hRandom = randomHole(ollie);
    // console.log(hRandom.style.background);
    const tRandom = randomTime(300, 1200);
    
    hRandom.style.background = 'url(../img/ollie_'+ollieImage+'.png) bottom center no-repeat';
    // hRandom.style.background = 'url(../public/img/ollie_'+ollieImage+'.png) bottom center no-repeat';
    // hRandom.style.background = 'url(../MyProject/img/ollie_'+ollieImage+'.png) bottom center no-repeat';
    hRandom.classList.add('showing');
    
    //if showing too long, ollie will hide automaticaly
    setTimeout(() => {
        hRandom.classList.remove('showing');
        // if(!finish){
            showingOllie();
        // }
    }, tRandom);
}

function hit() {
    //I Dont think this condition is useful, IDK. Just want to add it
    if(this.classList.contains("ollie")){
        hitSound.play();
        this.classList.remove('showing');
        score++;
        totalScore.textContent = score;
    }
}

ollie.forEach(t => {
    t.addEventListener('click', hit);
});

function startGame(){
    finish = false;
    score = 0;
    totalScore.textContent = score;
    showingOllie();
    setTimeout(() => {
        finish = true;
    }, 10000);
}




// modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//read first modal

var modalrf = document.getElementById("readFirst");

// Get the button that opens the modal
var btn = document.getElementById("btn-readFirst");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalrf.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalrf.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalrf.style.display = "none";
  }
}



// script for play button
const btnPlay = document.querySelector('#btnPlay');
const gameMenu = document.querySelector('.showingMenu');

btnPlay.addEventListener('click',function(){
    gameMenu.classList.add('hidden');
    bgm.play();
    bgm.volume = 0.1;
    setTimeout(() => {
        startGame();
    }, 4000);
})