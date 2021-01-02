//flip cards with toggle
//lol this did not work, try again
//switched querySelectorAll from 'card' to 'img'


// //making deck of cards into an array so my match function can loop through?
// let card = document.getElementsByClassName("card");
let currentChoice = [];

const cards = document.querySelectorAll('img');
const imageFlip = document.querySelectorAll('.front')
let imageSources = ["img/bethenny.png", "img/bethenny.png", "img/denise.png", "img/denise.png", "img/karen.png", "img/karen.png", "img/lisa.png", "img/lisa.png", "img/monique.png", "img/monique.png", "img/porsha.png", "img/porsha.png", "img/tamra.png", "img/tamra.png", "img/teresa.png", "img/teresa.png"]

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
        // alert('Congrats, we have a match!')
        // currentChoice[0].setAttribute('src', Bravo-Memory-Game/img/andy.png)
        // currentChoice[1].setAttribute('src', Bravo-Memory-Game/img/andy.png)
        openModal(modalMatch)
        setTimeout(()=> {closeModal(modalMatch)}, 1000)
    } else {
        currentChoice[0].classList.toggle('back')
        currentChoice[1].classList.toggle('back')
        // alert('Try again, boo boo.')
        // currentChoice[0].setAttribute('src', Bravo-Memory-Game/img/andy.png)
        // currentChoice[1].setAttribute('src', Bravo-Memory-Game/img/andy.png)
        openModal(modalNoMatch)
        setTimeout(()=> {closeModal(modalNoMatch)}, 1000)
    }
    currentChoice = [];
    moveCounter()
    // clearBoard()
    
    console.log("checking for win");
}

// const gameBoard = document.getElementById('gameBoard')
// function clearBoard(){
//     if gameBoard
// }

// shuffleGame() {
//     cards = shuffle(cards);

// }

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

//get reset button to shuffle the cards, onclick reload() function in html
// document.getElementById('resetBtn')
// reload(){
//     cards = shuffle(cards)
// }

let modalMatch = document.getElementById('matchModal')
function openModal(modal) {
    modal.style.display = "block"
}
function closeModal(modal) {
    modal.style.display = "none"
}

let modalNoMatch = document.getElementById('noMatchModal')
console.log(modalNoMatch);

document.getElementById('resetBtn').addEventListener('click', ()=> {shuffle()})
function shuffle() {
    console.log('clicked shuffle');
    console.log(imageFlip);
    imageSources.sort(()=> {
        let random = Math.random() > .5
        if (random) {
            return -1
        } else {
            return 1
        }
        console.log(random);
    });
    console.log(imageSources);
    imageFlip.forEach((image, index)=> {
        image.src = imageSources[index]
    })
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