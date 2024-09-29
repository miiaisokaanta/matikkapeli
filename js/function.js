'use strict'

///JavaScript-tiedostoon määritellään muuttujat, joihin arvotaan satunnaisluvut 1-10 välillä. Muuttujat määritellään tiedoston alussa, koska niitä tarvitaan useammassa eri funktiossa JavaScriptissä, jolloin muuttuja ei voi olla määritelty paikallisesti jonkun funktion sisässä
let rand_num1 = 0
let rand_num2 = 0

///oikeat/väärät vastaukset määrien muuttujat
let correctCount = 0
let incorectCount = 0

///parametrina voidaan antaa lukualueen ala- ja yläraja, ja funktio palauttaa arvotun satunnaisluvun
const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

/// Satunnaisluvun palauttava funktio: Tämä funktio kutsuu aiemmin ja edellä toteutettua getRandomIntNumberInRange-funktiota parametreillä 1 ja 10. Satunnaisluvut otetaan talteen skriptin alussa määriteltyihin muuttujiin, jotta luvut voidaan laskea myöhemmin yhteen ja tarkastaa, oliko käyttäjän vastaus oikein. Luvut laitetaan myös näkyviin käyttöliittymään
const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1, 10)
    rand_num2 = getRandomIntNumberInRange(1, 10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

///Kun käyttäjä avaa sivun 1. kertaa, kutsutaan edellä määriteltyä funktioita, joka arpoo ja näyttää satunnaisluvut. DOMContentLoaded-tapahtumakäsittelijä ei ole pakollinen, mutta tällä varmistetaan, että html-dokumentti on varmasti ladattu selaimeen ja html-elementit on olemassa.
addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
});

///Napin tapahtumakäsittelijässä luetaan käyttäjän vastaus, lasketaan oikea tulos ja verrataan näitä keskenään ehtolauseella. Tuloksen mukaan näytetään viesti siitä onko vastaus oikein vai väärin. Tarkastuksen jälkeen arvotaan uusi tehtävä ja tyhjennetään edellinen vastaus.
document.querySelector('button').addEventListener('click',() => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Correct!')
        correctCount++ ///kasvatetaan oikeiden vastausten määrää
        document.querySelector('#correctCount').innerHTML = correctCount  ///päivitetään oikeiden vastausten määrä
    }   else {
        alert('Incorrrect!')
        incorectCount++ ///kasvatetaan väärien vastausten määrää
        document.querySelector('#incorrectCount').innerHTML = incorectCount ///päivitetään väärien vastausten määrä
    }

    /// arvotaan uudet luvut ja tyhjennetään kenttä
    randomizeNumbers()
    document.querySelector('input').value = ''
})