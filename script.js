//flip cards with toggle
//lol this did not work, try again
//switched querySelectorAll from 'card' to 'img'
const cards = document.querySelectorAll('img');

function flipCard() {
    this.classList.toggle('back');
    console.log("flipped");
    console.log(this.classList);
}

cards.forEach(card => card.addEventListener('click', flipCard));


//making deck of cards into an array so my match function can loop through?
// let card = document.getElementsByClassName("card");
// let cards = [...card];

//make a checkForMatch () function 
    //if match === true, keep displayCard, alert popup "you got a match"
    //if match === false, hideCard, alert popup "not a match"

let moves = 0;
let counter = document.getElementsByClassName('moves')

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