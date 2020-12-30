//flip cards with toggle
//lol this did not work, try again
//switched querySelectorAll from 'card' to 'img'


// //making deck of cards into an array so my match function can loop through?
// let card = document.getElementsByClassName("card");
let currentChoice = [];

const cards = document.querySelectorAll('img');

function flipCard() {
    this.classList.toggle('back');
    console.log("flipped");
    console.log(this.classList);
    console.log(this.parentNode.querySelector('.front').src);
    if (currentChoice.length === 1) {
        currentChoice.push(this)
        setTimeout(checkForMatch, 500)
    } else {
        currentChoice.push(this)
    }
    console.log(currentChoice);
}

cards.forEach(card => card.addEventListener('click', flipCard));

function checkForMatch() {
    // const cards = document.querySelectorAll('img')
    // const firstPick = cards[0]
    if (currentChoice[0].parentNode.querySelector('.front').src === currentChoice[1].parentNode.querySelector('.front').src){
        console.log("They're the same");
    } else {
        currentChoice[0].classList.toggle('back')
        currentChoice[1].classList.toggle('back')
    }
    currentChoice = [];
    moveCounter()
    
    console.log("checking for win");
}

//make a checkForMatch () function 
    //if match === true, keep displayCard, alert popup "you got a match"
    //if match === false, hideCard, alert popup "not a match"

//use id not classname
let moves = 0;
let counter = document.getElementById('moves')
console.log(typeof counter);
//moves counter (class 'moves') count each click pair (2 clicks for one move) as a move
function moveCounter(){    
    moves++;    
    counter.innerHTML = moves;
}


// let Bethenny = document.getElementById('Bethenny');
// let Denise = document.getElementById('Denise');
// let Karen = document.getElementById('Karen');
// let Lisa = document.getElementById('Lisa');
// let Monique = document.getElementById('Monique');
// let Porsha = document.getElementById('Porsha');
// let Tamra = document.getElementById('Tamra');
// let Teresa = document.getElementById('Teresa');

// checkForMatch ()