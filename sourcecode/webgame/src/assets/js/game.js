class Game {
    round
    bet
    batailleRounds = []
    tryRound = 0
    

    init() {

    }

    startRound () {
        if(story.kapitelID == 2 && story.player.position >= mapFields){
            story.player.setPosition(mapFields)
            this.showContinueBtn()
            if(debugmode) console.log("Spiel erfolgreich!")
            this.endGame()
            return
        } else if(story.kapitelID == 3 && story.player.position >= (mapFields)*2){
            story.player.setPosition((mapFields)*2)
            this.showContinueBtn()
            if(debugmode) console.log("Spiel erfolgreich!")
            this.endGame()
            return
        } else if(story.kapitelID == 4 && story.player.position >= (mapFields)*3){
            story.player.setPosition((mapFields)*3)
            this.showContinueBtn()
            if(debugmode) console.log("Spiel erfolgreich!")
            this.endGame()
            return
        }

        // Verstecke Textbereich und zeige den Spielbereich
        storyImagesArea.style.display = "none"
        mapArea.style.display = "block"
        storyTextArea.style.display = "none"
        cardGameArea.style.display = "block"

        // Aktiviert die Einsatz-Buttons
        this.activateBetBtns()
        this.toggleBetBatailleBtns()
        this.toggleBetBatailleBtns()

        // Versteckt den Weiter Button
        continueBtn.style.display = "none"

        this.round = new Round

        // Fügt den Einsatz-Buttons jeweils einen Eventlistener mit einer Callback Funktion hinzu 
        betBtns.forEach((e) => {
            e.addEventListener(('click'), () => {
                if(debugmode) console.log("Spiel gestartet")

                // Deaktiviert die Buttons
                this.deactivateBetBtns().then(() => {
                    if(debugmode) console.log("Einsatz: " + e.dataset.value)

                    // Setze Hintergrund-Farben der letzten Runde zurück
                    dealerCardArea.classList.remove("loser")
                    dealerCardArea.classList.remove("winner")
                    dealerCardArea.classList.remove("bataille")
                    playerCardArea.classList.remove("loser")
                    playerCardArea.classList.remove("winner")
                    playerCardArea.classList.remove("bataille")

                    // Entfernt Info-Text
                    betBtnsArea.querySelector('.info-text').innerHTML = ""
            
                    // Setzt den Einsatz der Runde auf den ausgewählten Wert
                    this.round.bet = e.dataset.value

                    this.mixCards()

                    // Zeigt Ergebnis an
                    
                    window.setTimeout(() => {
                        
                        // Startet das Spiel
                        this.round.startRound()

                        // Wertet das Ergebnis aus
                        this.showResult()
                        
                        if(this.round.winner != 0){ 
                            // Wenn es einen Gewinner gibt...
                            switch(this.round.winner){
                                case 'dealer':
                                    story.player.decreaseposition(parseInt(this.round.bet))
                                    dealerCardArea.classList.add("winner")
                                    playerCardArea.classList.add("loser")

                                    this.startRound()
                                    break
                                case 'player':
                                    story.player.increaseposition(parseInt(this.round.bet))
                                    dealerCardArea.classList.add("loser")
                                    playerCardArea.classList.add("winner")

                                    this.startRound()
                                    break
                            }
                        } else {
                            dealerCardArea.classList.add("bataille")
                            playerCardArea.classList.add("bataille")
                            
                            // Wenn der Spieler sich ein Bataille leisten kann...
                            if(story.player.position >= this.round.bet*2){
                                this.bet = this.round.bet
                                this.toggleBetBatailleBtns()
                                this.recursiveBataille()
                            } else {
                                if(debugmode) console.log("Position reicht nicht aus um weiteren Einsatz zu tätigen.")
                                betBtnsArea.querySelector('.info-text').innerHTML = "Deine Position reicht für ein Bataille nicht aus."
                                //
                                story.player.decreaseposition(this.round.bet)
                                // Zeige Dealer als Gewinner an
                                dealerCardArea.classList.add("winner")
                                playerCardArea.classList.add("loser")

                                this.startRound()
                            }
                        }
                    }, mixInterval*mixRepetitions)  // end timeout
                }) // end deactivateBetBtns
            })  // end evtlistner
        })  // end forEach
    }

    endGame() {
        dealerCardArea.classList.remove("loser")
        dealerCardArea.classList.remove("winner")
        dealerCardArea.classList.remove("bataille")
        playerCardArea.classList.remove("loser")
        playerCardArea.classList.remove("winner")
        playerCardArea.classList.remove("bataille")

        dealerCard.style.backgroundImage = "url('assets/img/spielkarten/joker.svg')"; 
        playerCard.style.backgroundImage = "url('assets/img/spielkarten/joker.svg')"; 
    }

    endThisRound() {
        this.round = null
        this.bet = null
        this.tryRound = 0
        dealerCardArea.classList.remove("bataille")
        playerCardArea.classList.remove("bataille")
        this.replaceBatailleBtns()
        this.toggleBetBatailleBtns()
        this.startRound()
        return
    }

    endBatailleRounds() {
        this.batailleRounds = []
        this.endThisRound()
    }

    showContinueBtn() {
        continueBtn.style.display = "inherit"
        continueBtn.classList.add("showAnimation")
        // window.setTimeout(() => {
        //     continueBtn.classList.remove("showAnimation")
        // }), 1000;
    }
    

    async recursiveBataille() {
        this.tryRound += 1

        batailleBtns.forEach((e) => {
            e.addEventListener(('click'), () => {
                if(e.dataset.value == "1"){
                    // Aufgeben
                    this.round.surrender()
                    // Nächste Runde starten
                    this.endThisRound()
                    return
                } else {
                    // Weiter kämpfen
                    if(debugmode) console.log("Bataille wurde zum " + this.tryRound + "x gestartet...")
                    let newBet = parseInt(this.round.bet)*2*parseInt(this.tryRound);
                    if(debugmode) console.log("Einsatz erhöht auf: " + newBet)

                    this.batailleRounds.push(new Round)
                    this.mixCards()

                    console.log(this.batailleRounds)

                    setTimeout(() => {
                        // Startet das Spiel
                        this.batailleRounds[this.tryRound-1].startRound()
        
                        // Wertet das Ergebnis aus
                        this.showResult()

                        switch(this.batailleRounds[this.tryRound-1].winner){
                            case 'dealer':
                                story.player.decreaseposition(newBet)
                                dealerCardArea.classList.remove("bataille")
                                playerCardArea.classList.remove("bataille")
                                dealerCardArea.classList.add("winner")
                                playerCardArea.classList.add("loser")
                                // Nächste Runde starten
                                this.endBatailleRounds()
                                break
                            case 'player':
                                story.player.increaseposition(parseInt(this.bet))
                                dealerCardArea.classList.remove("bataille")
                                playerCardArea.classList.remove("bataille")
                                dealerCardArea.classList.add("loser")
                                playerCardArea.classList.add("winner")
                                // Nächste Runde starten
                                this.endBatailleRounds()
                                break
                            default:
                                this.recursiveBataille()
                        }
                    }, mixInterval*mixRepetitions)
                }
            })
        })  // end foreach  
        return
    }

    async deactivateBetBtns() {
        this.replaceBetBtns().then(() => {
            betBtns.forEach((e) => {
                e.disabled = true
                return
            })
        })
    }

    async replaceBetBtns() {
        // Workaround um alle Eventlistener auf den Elementen zu entfernen
        let oldBetBtns = betBtns
        oldBetBtns.forEach((e) =>{
            let newBetBtn = e.cloneNode(true);
            e.parentNode.replaceChild(newBetBtn, e);
        })

        betBtns = document.querySelectorAll(".btn-bet")
    }

    replaceBatailleBtns() {
        // Workaround um alle Eventlistener auf den Elementen zu entfernen
        let oldBatailleBtns = batailleBtns
        oldBatailleBtns.forEach((e) =>{
            let newBatailleBtns = e.cloneNode(true);
            e.parentNode.replaceChild(newBatailleBtns, e);
        })

        batailleBtns = document.querySelectorAll(".btn-bataille")
    }

    activateBetBtns() {
        betBtns.forEach((e) => {
            if(story.player.position >= e.dataset.value){
                e.disabled = false
            }
            if(story.kapitelID == 3 && story.player.position < parseInt(e.dataset.value) + parseInt(mapFields)) e.disabled = true
            if(story.kapitelID == 4 && story.player.position < parseInt(e.dataset.value) + parseInt(mapFields*2)) e.disabled = true
            if(e.dataset.value == 1) e.disabled = false
            if(godmode) e.disabled = false
        })
    }

    toggleBetBatailleBtns() {
        if(betBtnsArea.style.display == "none"){
            betBtnsArea.style.display = "inherit"
            batailleBtnsArea.style.display = "none"
        } else {
            betBtnsArea.style.display = "none"
            batailleBtnsArea.style.display = "inherit"
        }        
    }

    async showResult() {
        dealerCard.style.backgroundImage = "url('assets/img/spielkarten/" + this.round.dealerCard[0] + "/" + this.round.dealerCard[1] + ".svg')"; 
        playerCard.style.backgroundImage = "url('assets/img/spielkarten/" + this.round.playerCard[0] + "/" + this.round.playerCard[1] + ".svg')";
        return Promise.resolve(1)
    }

    async mixCards() {
        let playerCardReturn, dealerCardReturn;
        var keyPressed = false

        let interval = setInterval(() => {
            let dealerCardColor = frenchCards[random(0,3)]
            let rnd = random(0,12)
            let dealerCardValue = dealerCardColor[1][rnd]
            
            let playerCardColor = frenchCards[random(0,3)]
            let rnd2 = random(0,12)
            let playerCardValue = playerCardColor[1][rnd2]

            while(playerCardValue == null){
                playerCardValue = playerCardColor[1][random(0,12)]
            }

            while(dealerCardValue == null){
                dealerCardValue = dealerCardColor[1][random(0,12)]
            }

            dealerCard.style.backgroundImage = "url('assets/img/spielkarten/" + dealerCardColor[0] + "/" + dealerCardValue + ".svg')"; 
            playerCard.style.backgroundImage = "url('assets/img/spielkarten/" + playerCardColor[0] + "/" + playerCardValue + ".svg')"; 

            playerCardReturn = [playerCardColor[0], playerCardValue]
            dealerCardReturn = [dealerCardColor[0], dealerCardValue]
        }, mixInterval)
        
        let handler = function(event) {
            clearInterval(interval)
            keyPressed = true
            window.removeEventListener('click', handler, false);
        };

        window.addEventListener("keypress", handler, false)

        setTimeout(() => {
            clearInterval(interval)
            window.removeEventListener('click', handler, false);
            if(keyPressed) {
                this.round.playerCard = playerCardReturn
                this.round.dealerCard = dealerCardReturn
            }
        }, mixInterval*mixRepetitions)
    }
    
}