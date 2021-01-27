class Player {
    constructor(position){
        this.position = parseInt(position)
    }

    setPosition(newPosition) {
        this.position = parseInt(newPosition)
        this.setPlayerPositionOnMap()
    }

    increaseposition(value){
        // increase old position by the won position
        this.setPosition(parseInt(this.position) + parseInt(value))        
        if (debugmode) console.log("Position erhöht auf " + this.position)
    }

    decreaseposition(value){
        if(story.kapitelID == 3 && this.position-value <= mapFields) this.setPosition(mapFields)
        else if(story.kapitelID == 4 && this.position-value <= mapFields*2) this.setPosition(mapFields*2)
        else {
            // decrease position by the lost position
            if(value > this.position) this.setPosition(0) // if you lost more than you had, stay at 0 (negative positions aren't possible)
            else this.setPosition(parseInt(this.position) - parseInt(value))
            if (debugmode) console.log("Position verringert auf " + this.position)
        }
    }

    setPlayerPositionOnMap() {
        story.map.setPlayerPosition(this.position)
        // Set Position Label
        if(this.position != 0) {
            document.querySelector("#player-position").innerText = this.position
        } else {
            document.querySelector("#player-position").innerText = "Start"
        }
    }
}