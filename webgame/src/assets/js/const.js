// Konstanten
const chapter = document.querySelector('#chapter')
const headline = document.querySelector('#headline')
const textarea = document.querySelector('#textarea')

const continueBtn = document.querySelector('#continue-story')
var betBtns = document.querySelectorAll(".btn-bet")
var batailleBtns = document.querySelectorAll(".btn-bataille")

const betBtnsArea = document.querySelector(".bet-area")
const batailleBtnsArea = document.querySelector(".bataille-area")
const storyTextArea = document.querySelector('#story-text')
const cardGameArea = document.querySelector('#card-game')
const storyImagesArea = document.querySelector('#story-images')
const mapArea = document.querySelector('#game-map')

const dealerCardArea = document.querySelector('.dealer-card-area')
const playerCardArea = document.querySelector('.player-card-area')
const dealerCard = document.querySelector('#dealer-card')
const playerCard = document.querySelector('#player-card')


const frenchCards = [
    ['kreuz', ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'bube', 'dame', 'koenig', 'ass']],
    ['pik', ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'bube', 'dame', 'koenig', 'ass']],
    ['herz', ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'bube', 'dame', 'koenig', 'ass']],
    ['karo', ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'bube', 'dame', 'koenig', 'ass']]
]

// load cards to cache
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 12; j++){
        url = "assets/img/spielkarten/" + frenchCards[i][0] + "/" + frenchCards[i][1][j] + ".svg"
        var img = new Image();
        img.src = url;
    }
}