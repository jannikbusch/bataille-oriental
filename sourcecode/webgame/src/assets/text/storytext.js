function getStoryText(kapitelID, position) {
    var headline, storytext, game
    switch(kapitelID){
        case 1:             // Kapitel 1
            switch(position) {
                case 1:     // Abschnitt 1
                    headline = "Willkommen Unbekannter."
                    storytext = 
                        `In einer vergangenen Zeit zog Orhanito los um den geheimen Schatz des Bennjamo zu finden. 
                        Die Informationen führten den Schatzsucher zum Bazar von Bhaktapur.`
                    game = false
                    break
                case 2:     // Abschnitt 2
                    headline = "Zweite Headline für uns."
                    storytext = 
                        `Dies ist ein Platzhalter für einen zweiten Storytext.`
                    game = false
                    break
                case 3:     // Abschnitt 3
                    headline = "Dritte Headline."
                    storytext = 
                        `Dies ist ein Platzhalter für einen dritten Storytext. <br><br> Spiel starten!!`
                    game = true
                    break
                default:
                    return false
            }
            break;
        case 2:             // Kapitel 2
            switch(position) {
                case 1:     // Abschnitt 1
                    headline = "Wow.. geschafft!"
                    storytext = 
                        `In einer vergangenen Zeit zog Orhanito los um den geheimen Schatz des Bennjamo zu finden. 
                        Die Informationen führten den Schatzsucher zum Bazar von Bhaktapur.`
                    game = false
                    break;
                case 2:     // Abschnitt 2
                    headline = "Zweite Headline von Kapitel 2"
                    storytext = 
                        `Dies ist ein Platzhalter für einen zweiten Storytext. <br><br> Spiel starten!!`
                    game = true
                    break;
                default:
                    return false
            }
            break;
        case 3:             // Kapitel 3
            switch(position) {
                case 1:     // Abschnitt 1
                    headline = "Wow.. geschafft!"
                    storytext = 
                        `In einer vergangenen Zeit zog Orhanito los um den geheimen Schatz des Bennjamo zu finden. 
                        Die Informationen führten den Schatzsucher zum Bazar von Bhaktapur.`
                    game = false
                    break;
                case 2:     // Abschnitt 2
                    headline = "Zweite Headline von Kapitel 3"
                    storytext = 
                        `Dies ist ein Platzhalter für einen zweiten Storytext. <br><br> Spiel starten!!`
                    game = true
                    break;
                default:
                    return false
            }
            break;
        case 4:             // Kapitel 4
            switch(position) {
                case 1:     // Abschnitt 1
                    headline = "Wow.. geschafft!"
                    storytext = 
                        `In einer vergangenen Zeit zog Orhanito los um den geheimen Schatz des Bennjamo zu finden. 
                        Die Informationen führten den Schatzsucher zum Bazar von Bhaktapur.`
                    game = false
                    break;
                case 2:     // Abschnitt 2
                    headline = "Zweite Headline von Kapitel 4"
                    storytext = 
                        `Dies ist der allerletzte Text vor dem allerletzen Text.`
                    game = false
                    break;
                default:
                    return false
            }
            break;
        default:
            return false
    }
    return [headline, storytext, game]
}