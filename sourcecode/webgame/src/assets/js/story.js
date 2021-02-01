class Story {
    kapitelID = 1
    position = 1
    now = "text"
    next = "text"
    player = new Player(playerStartPosition)
    map = new Map
    game = new Game

    printText() {
        if(debugmode) console.log(`Kapitel ${this.kapitelID} — Abschnitt ${this.position}`)
        let text = getStoryText(this.kapitelID, this.position)

        if(text[3] != null) {
            storyImagesArea.style.background = "black url('assets/img/story/" + text[3] + "') no-repeat scroll center center"
        } else {
            storyImagesArea.style.background = "black"
        }

        chapter.innerHTML = `Kapitel ${this.kapitelID}`
        headline.innerHTML = text[0]
        textarea.innerHTML = text[1]

        if(text[2] == true) this.next = "game"
    }

    init() {
        this.map.init()
    }

    continue(){
        this.position += 1
        if(!getStoryText(this.kapitelID, this.position)){
            this.kapitelID += 1
            this.position = 1  
        } 
        
        if(this.kapitelID > letztesKapitel+1){
            this.end()
        }
    }

    end(){
        if(debugmode) console.log(`Kapitel ${this.kapitelID} — Abschnitt ${this.position}`)
        let text = getStoryText(this.kapitelID, this.position)

        chapter.innerHTML = ``
        headline.innerHTML = "Sie werden weitergeleitet..."
        textarea.innerHTML = ""
        window.location = 'http://www.bataille-oriental.com/'
        
        continueBtn.style.display = "none"
    }
}

var story, game;

// Zentrales Element: Weiter Button (steuert die Story)
continueBtn.addEventListener(('click'), () => {
    // if(debugmode) console.log('continue-button clicked')
    
    // Starte Story, wenn das erste mal gelickt wurde.
    if(story == null){
        story = new Story
        story.init()
    } 
    
    if(story.now == "game"){
        // Wenn jetzt ein spiel ansteht
        story.game.startRound()

        story.now = "text"
        story.next = "text"
        continueBtn.innerText = "Weiter »"
        return
    } else {
        // Wenn der Text weitergeht
        
        // Verstecke Spielbereich und zeige den Textbereich
        storyImagesArea.style.display = "block"
        mapArea.style.display = "none"
        storyTextArea.style.display = "block"
        cardGameArea.style.display = "none"

        // Deaktiviert die Einsatz-Buttons
        betBtns.forEach((e) => { e.disabled = true })

        // Läd den nächsten Story Text
        story.printText()

        story.continue()
    }
    
    // Falls als nächstes ein Spiel ansteht, ändere den Text vom Button
    if(story.next == "game") {
        story.now = "game"
        continueBtn.innerText = "Runde starten..."
    } else {
        continueBtn.innerText = "Weiter »"
    }
})