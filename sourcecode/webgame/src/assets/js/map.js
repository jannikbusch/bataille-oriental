class Map {
    constructor(){
        
    }

    mapCanvas = document.querySelector("#map")
    mapContext = this.mapCanvas.getContext('2d')
    mapFields = mapFields+1

    playerToken

    init() {
        this.setPlayerPosition(0)
    }

    drawMap() {
        let canvasWidth = this.mapCanvas.width
        let canvasHeight = this.mapCanvas.height
        let fieldWidth = canvasWidth/this.mapFields
        let fieldHeight = canvasHeight/this.mapFields

        // Context
        let ctx = this.mapContext        

        // Styles
        ctx.fillStyle = "rgb(35, 25, 25)"
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(70, 50, 50)"

        // Linke Reihe
        for(let i = 1; i <= this.mapFields-1; i++) {
            ctx.fillRect(0, i * fieldHeight, fieldWidth, fieldHeight)
            ctx.strokeRect(0, i * fieldHeight, fieldWidth, fieldHeight)
        }
        
        // Obere Reihe
        for(let i = 1; i <= this.mapFields-2; i++) {
            ctx.fillRect(i * fieldWidth, 0, fieldWidth, fieldHeight)
            ctx.strokeRect(i * fieldWidth, 0, fieldWidth, fieldHeight)
        }

        // Rechte Reihe
        for(let i = 1; i <= this.mapFields-2; i++) {
            ctx.fillRect(canvasWidth-fieldWidth, i * fieldHeight, fieldWidth, fieldHeight)
            ctx.strokeRect(canvasWidth-fieldWidth, i * fieldHeight, fieldWidth, fieldHeight)
        }

        // Ecke oben links
        let janniko = this.mapCanvas.querySelector("#janniko")
        ctx.drawImage(janniko, 0, 0, fieldWidth, fieldHeight)
        ctx.strokeRect(0, 0, fieldWidth, fieldHeight)

        // Ecke oben rechts
        let tituso = this.mapCanvas.querySelector("#tituso")
        ctx.drawImage(tituso, (this.mapFields-1)*fieldWidth, 0, fieldWidth, fieldHeight)
        ctx.strokeRect((this.mapFields-1)*fieldWidth, 0, fieldWidth, fieldHeight)

        // Ecke unten rechts
        let bennjamo = this.mapCanvas.querySelector("#bennjamo")
        ctx.drawImage(bennjamo, (this.mapFields-1)*fieldWidth, (this.mapFields-1)*fieldHeight, fieldWidth, fieldHeight)
        ctx.strokeRect((this.mapFields-1)*fieldWidth, (this.mapFields-1)*fieldHeight, fieldWidth, fieldHeight)


        // draw Logo
        let logo = this.mapCanvas.querySelector("#logo")
        let whr = logo.width / logo.height // Verhältnis Breite zu Höhe (width-height-ratio)
        let newWidth = parseInt(fieldWidth*5)
        let newHeight = parseInt(newWidth / whr)
        let xOffset = canvasWidth/2 - newWidth/2
        let yOffset = canvasHeight/2 - newHeight/2
        ctx.drawImage(logo, xOffset, yOffset, newWidth, newHeight)
    }

    setPlayerPosition(newPosition) {
        this.drawMap()

        let canvasWidth = this.mapCanvas.width
        let canvasHeight = this.mapCanvas.height
        let circleRadius = ((canvasWidth/this.mapFields)/2) * 0.5

        let ctx = this.mapContext

        // default
        var xOffset = -500
        var yOffset = -500

        // Wenn die neue Position in der linken Spalte ist
        if(newPosition <= this.mapFields-1){
            xOffset = (canvasWidth/this.mapFields)/2
            yOffset = canvasHeight - (canvasHeight/this.mapFields)*newPosition - (canvasHeight/this.mapFields)/2
        } else if((newPosition <= mapFields*2)) {
            xOffset = (canvasWidth/this.mapFields)*(newPosition-mapFields) + (canvasWidth/this.mapFields)/2
            yOffset = (canvasHeight/this.mapFields)/2
        } else if((newPosition <= mapFields*3)) {
            xOffset = canvasWidth - (canvasWidth/this.mapFields)/2// - (canvasWidth/this.mapFields)
            yOffset = (canvasHeight/this.mapFields)*(newPosition-mapFields*2) + (canvasHeight/this.mapFields)/2 // canvasHeight - (canvasHeight/this.mapFields)*newPosition - (canvasHeight/this.mapFields)/2
        }

        ctx.lineWidth = 1;
        ctx.fillStyle = "rgb(185, 175, 175)"
        ctx.strokeStyle = "rgb(50, 50, 50)"
        ctx.beginPath();
        ctx.arc(xOffset, yOffset, circleRadius, 0, 2 * Math.PI);
        ctx.fill(); 
        ctx.arc(xOffset, yOffset, circleRadius*0.8, 0, 2 * Math.PI);
        ctx.stroke(); 
    }
}