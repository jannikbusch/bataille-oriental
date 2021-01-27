class Round {
    constructor(bet, deck){
        this.bet = bet
        deck = deck
    }

    deck = new Deck
    playerCard
    dealerCard

    compareCards(){
        if(this.dealerCard[1] > this.playerCard[1]){
            this.winner = 'dealer'
            if (debugmode) console.log("%cWinner: " + this.winner, "color: red")
        } else if (this.dealerCard[1] < this.playerCard[1]){
            this.winner = 'player'
            if (debugmode) console.log("%cWinner: " + this.winner, "color: green")
        } else {
            this.winner = 0
            if (debugmode) console.log("%cWinner: " + this.winner, "color: orange")
        }

        if(godmode) this.winner = 'player'  // if godmode is active, player always wins

        return this.winner
    }

    surrender(){
        story.player.decreaseposition(this.bet/2)
    }

    
    startRound(){
        if(this.playerCard == null){
            this.playerCard = this.deck.getRandomCard
            if (debugmode) console.log("Player: " + this.playerCard)
        }
        if(this.dealerCard == null){
            this.dealerCard = this.deck.getRandomCard
            if (debugmode) console.log("Dealer: " + this.dealerCard)
        }
        this.compareCards()
    }
}

function random(min, max){
    return Math.floor((Math.random() * max) + min)
}