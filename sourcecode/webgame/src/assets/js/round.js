class Round {
    constructor(bet, deck){
        this.bet = bet
        deck = deck
    }

    deck = new Deck
    playerCard
    dealerCard

    compareCards(){
        if (debugmode) console.log("Dealer: " + this.dealerCard[1])
        if (debugmode) console.log("Player: " + this.playerCard[1])

        var dealerCardValue, playerCardValue

        switch(this.dealerCard[1]){
            case 'bube':
                dealerCardValue = 11
                break;
            case 'dame':
                dealerCardValue = 12
                break;
            case 'koenig':
                dealerCardValue = 13
                break;
            case 'ass':
                dealerCardValue = 14
                break;
            default:
                dealerCardValue = parseInt(this.dealerCard[1])
        }

        switch(this.playerCard[1]){
            case 'bube':
                playerCardValue = 11
                break;
            case 'dame':
                playerCardValue = 12
                break;
            case 'koenig':
                playerCardValue = 13
                break;
            case 'ass':
                playerCardValue = 14
                break;
            default:
                playerCardValue = parseInt(this.playerCard[1])
        }

        if (debugmode) console.log("Dealer Wert: " + dealerCardValue)
        if (debugmode) console.log("Player Wert: " + playerCardValue)

        if(dealerCardValue > playerCardValue){
            this.winner = 'dealer'
            if (debugmode) console.log("%cWinner: " + this.winner, "color: red")
        } else if (dealerCardValue < playerCardValue){
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
        }
        if(this.dealerCard == null){
            this.dealerCard = this.deck.getRandomCard
        }
        this.compareCards()
    }
}

function random(min, max){
    return Math.floor((Math.random() * max) + min)
}