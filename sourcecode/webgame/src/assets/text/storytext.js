function getStoryText(kapitelID, position) {
    var headline, storytext, image, game
    switch(kapitelID){
        case 1:             // Kapitel 1
            switch(position) {
                case 1:     // Abschnitt 1
                    headline = "Willkommen Unbekannter."
                    storytext = 
                        `In einer vergangenen Zeit lebte ein junger Mann namens Orhanito. Er war ein einfacher Bursche vom Land, 
                        er und seine Eltern hatten nicht viel. Jeden Tag träumte er von Abenteuern und großen Schätzen um seinem Dorf 
                        zu helfen. <br><br>
                        Eines Tages ging ein Gerücht durch sein Dorf: der legendäre Benjamo, Meisterdieb und großer Krieger, 
                        soll seinen Schatz irgendwo versteckt haben. So zog der junge Orhanito los, um den geheimen Schatz des Bennjamo zu finden. 
                        Seine ersten Informationen führten den Schatzsucher zum Bazar von Bhaktapur.`
                    image = "hello.jpg"
                    game = false
                    break
                case 2:     // Abschnitt 2
                    headline = "Erste Erfahrungen"
                    storytext = 
                        `Von einem Händler erhielt er den Hinweis, dass er zum Schmuckstand des Tituso gehen 
                        sollte und dort nach dem Reif der Reifen zu fragen, da dieser der Schlüssel zu wertvollen Informationen sei.<br><br>
                        Tituso war an Geld nicht interessiert, sondern forderte Orhanito zu einer Runde des Spiels Bataille auf.`
                    game = false
                    break
                case 3:     // Abschnitt 3
                    headline = "Zeit für ein Spiel"
                    storytext = 
                        `Tituso:&emsp; Du möchtest also wissen wo sich der Schatz befindet.<br>
                        <br>
                        Orhanito: <i>Mir wurde gesagt, wenn mir einer helfen kann, dann sie.</i><br>
                        <br>
                        Tituso:&emsp; HA HA HA... Ich bin nur ein einfacher Händler der den ganzen Tag Karten spielt.<br>
                        <br>
                        Orhanito: <i>Ich hoffe sie sind nicht so schlecht, wie die Sachen, die sie verkaufen.</i><br>
                        <br>
                        Tituso:&emsp; Wie war das? Also gut kleiner. Wenn du mich schlägst, verrate ich dir, was ich über den Schatz weiß.<br>`
                    game = true
                    break
                default:
                    return false
            }
            break;
        case 2:             // Kapitel 2
            switch(position) {
                case 1:     // Abschnitt 1
                    headline = "Wichtige Informationen"
                    storytext = 
                        `Tituso hielt sein Wort und sagte ihm was er weiß. In Sallaghari soll
                        es einen Herren geben, einen alten Händler Kollegen, namens Janniko, der ihm weiterhelfen könnte.<br>
                        So zog der junge Held weiter und machte sich auf den Weg nach Sallaghari.`
                    game = false
                    break
                case 2:     // Abschnitt 2
                    headline = "Eine ehrliche Münze"
                    storytext = 
                        `Auf dem Sallaghari fragt sich Orhanito nach Janniko durch. Er fand ihn endlich. Doch
                        Janniko tat so als würde er nichts von einem Schatz zu wissen. Orhanito versuchte mit einer Münze,
                        die er von Tituso bekommen hat, sein Vertrauen zu gewinnen.<br> Als er die Münze sah, war er bereit mit 
                        Orhanito zu reden.`
                    game = false
                    break
                case 3:
                    headline = "Mehr als ein Spiel"
                    storytext = 
                        `Janniko: Du warst also wirklich bei Tituso<br>
                        <br>
                        Orhanito: <i>Ja genau, er meinte du sollst wissen was es mit dem Schatz aufsich hat.</i><br>
                        <br>
                        Janniko: Vor ein paar Jahren bin ich Benjamo in einer Kneipe begegnet. Er spendierte jedem Getränke und Speisen <br>
                        als gebe es kein Morgen. Danach schloß ich mich seiner Truppe an und wir haben gemeinsam Schätze gejagt.<br>
                        <br>
                        Orhanito: <i>Und wo sollen diese Schätze sein?</i><br>
                        <br>
                        Janniko: Das musst du selber herausfinden kleiner<br>
                        <br>
                        Orhanito: <i>Ich habe den weiten Weg nicht umsonst auf mich genommen, sagen sie mir wo der Schatz ist</i><br>
                        <br>
                        Janniko: Benjamo hat gerne ein Spiel gespielt wenn Leute etwas von ihm wissen wollten. Der Haken dabei war,
                        sie mussten ihn besiegen. Ich mache dir einen Vorschlag: Du spielst gegen mich. Wenn du gewinnst, 
                        verrate ich dir mehr.`
                    game = true
                    break
                default:
                    return false
            }
            break;
        case 3:             // Kapitel 3
            switch(position) {
                case 1:     // Abschnitt 1
                    headline = "Heiße Spur"
                    storytext = 
                        `Janniko war geschlagen und gab Orhanito die Informationen die ihn zum Schatz des Bennjamo führen sollten.
                        Er erzählte ihm von einem Wasserfall. Benjamo soll gesagt haben, falls er irgendwann sterben würde,
                        solle er in der Nähe von diesem Wasserfall begraben werden. Mit allen Schätzen und Reichtümern, die er besitzt.`
                    game = false
                    break;
                case 2:     // Abschnitt 2
                    headline = "Ein alter Mann"
                    storytext = 
                        `Orhanito war am Ende seiner Kräfte. Wochenlang lief er durch Wälder und Berge auf der Suche nach dem besagten Wasserfall.<br>
                        Kurz bevor er aufgeben wollte hörte er das Geräusch. Das erlösende Geräusch eines Wasserfalls. Als er ankam war dort
                        nur eine kleine Hütte. Er ging in die Hütte aber keiner war dort und es sah nicht so aus als würde irgendwer hier sein.
                        Plötzlich berührte ihn eine Hand an der Schulter. Er zuckte zusammen und sah einen älteren Herren.`
                    game = false
                    break;
                case 3:
                    headline = "Die Lösung"
                    storytext =
                        `Orhanito: <i>Wer sind sie und wo bin ich hier?</i><br>
                        <br>
                        Alter Mann: Das kann ich dich genauso Fragen. Was möchtest du in meinem Haus<br>
                        <br>
                        Orhanito: <i>Ihr Haus? Tut mir leid ich wusste nicht das hier jemand wohnt. Ich bin auf der Suche nach einem Schatz
                        und jetzt bin ich hier gelandet. Der Schatz soll in der Nähe von diesem Wasserfall sein.</i><br>
                        <br>
                        Alter Mann: Ein Schatz also. Ihr Kinder glaubt auch jede Geschichte die ihr hört. Hier gibt es keinen Schatz du kannst wieder gehen.<br>
                        <br>
                        Orhanito: <i>Doch ganz sicher! Piata und Tituso haben mir davon erzählt es muss ihn geben.</i><br>
                        <br>
                        Alter Mann: Piata und Tituso? Woher kennst du die Beiden?<br>
                        <br>
                        Orhanito: <i>Ich habe sie auf meiner Reise kennegelernt und durch ihre Informationen bin ich hier gelandet.</i><br>
                        <br>
                        Alter Mann: Nagut kleiner, ich glaube du hast die Wahrheit verdient. Einen Schatz gibt es leider nicht. Ich habe
                        meine Reichtümer verteilt bevor ich hierher gekommen bin.<br>
                        <br>
                        Orhanito: <i>Also war meine Reise umsonst?</i><br>
                        <br>
                        Alter Mann: Nein überhaupt nicht. Nach den vielen Jahren habe ich gemerkt der wahre Schatz ist die Reise selbst.
                        Die Erfahrungen sind mehr Wert als das Gold und sie helfen dir dein wahres Ich zu bestimmen. Du bist ein tapferer Kerl,
                        irgendwann findest du deinen Schatz.<br>
                        <br>
                        Orhanito: <i>Ich denke sie haben Recht, vielen dank für ihre weisen Worte. Haben sie Lust auf ein Kartenspiel?</i><br>
                        <br>
                        Benjamo: Dann zeig mal her was du auf deiner Reise gelernt hast.<br>`
                    game = true
                    break
                default:
                    return false
            }
            break;
        case 4:             // Kapitel 4
            switch(position) {
                case 1:     // Abschnitt 1
                    headline = "Wow.. geschafft!"
                    storytext = 
                        `Platzhalter für den vorletzten Text.`
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
    return [headline, storytext, game, image]
}