const debugmode = true;
var godmode = false; 

// writing speed
const text_speed = 50;

// mixing cards
var mixInterval = 300
var mixRepetitions = 10
if(difficulty == "hard") {
    mixInterval = 100
    mixRepetitions = 30
} else if(difficulty == "medium") {
    mixInterval = 150
    mixRepetitions = 20
}

// roundCount to prevent Timeout
const maxRoundCount = 15

// playerStartPosition
const playerStartPosition = 0

// Map-Settings
var mapFields = 7
if(difficulty == "hard") {
    var mapFields = 12
} else if(difficulty == "medium") {
    var mapFields = 9
}


// Wichtig: "letztesKapitel" erhöhen, wenn sich Kapitelanzahl erhöht!!!
const letztesKapitel = 4