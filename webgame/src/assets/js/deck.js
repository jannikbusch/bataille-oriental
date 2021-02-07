class Deck {
    // possible colors of a french deck and the numbers for each deck
    cards = frenchCards
    roundCount = 0

    get getRandomCard(){
        // get a random card

        // first, get random values from the random function (  random(min, max)  )
        let color = this.cards[random(0,3)]
        let value = color[1][random(0,12)]

        // if a value is not existant, get another one
        let count = 0
        if(value == undefined){
            if(debugmode) console.log("To prevent the system from timing out, the deck was filled up with new cards.")
            this.cards = frenchCards
            value = color[1][random(0,12)]
        }

        // remove the drawn card from the deck array
        // this.removeCardFromDeck(color, value)

        if(this.roundCount <= maxRoundCount){
            this.roundCount++
        } else {
            if(debugmode) console.log("To prevent the system from timing out, the deck was filled up with new cards.")
            this.cards = frenchCards
            this.roundCount = 0
        }

        return [color[0], value]
    }

    removeCardFromDeck(color, value){
        // remove the drawn card from the deck array

        // get index of element from cards(-deck)
        let colorIndex = this.cards.indexOf(color)
        let valueIndex = this.cards[colorIndex][1].indexOf(value)

        // delete the given card from the deck
        this.cards[colorIndex][1].splice(valueIndex, 1)
    }
}

