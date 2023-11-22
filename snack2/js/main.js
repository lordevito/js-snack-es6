`use strict`;

//Creiamo un array di oggetti di squadre di calcio.

const squadreCalcio = [
    {
        nome: 'Lazio',
        puntiFatti: '0',
        falliSubiti: '0'

    },
    {
        nome: 'Valencia',
        puntiFatti: '0',
        falliSubiti: '0'
    },
    {
        nome: 'Liverpool',
        puntiFatti: '0',
        falliSubiti: '0'
    },
    {
        nome: 'Tottenham',
        puntiFatti: '0',
        falliSubiti: '0'
    },
    {
        nome: 'Ajax',
        puntiFatti: '0',
        falliSubiti: '0'
    }

];

//Creiamo un array vuoto dove inseriremo il risultato finale

const risultatoFinale = [];

//Inizializziamo una funzione per generare numeri random

function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

//Creiamo un ciclo ForEach dove destrutturiamo per prendere nome e falli subiti
//agganciamo i numeri random a falli subiti e punti fatti, poi pushiamo nome e 
//falli subiti

squadreCalcio.forEach((element, index) =>{
    element.puntiFatti = numeriRandom(2, 100);
    element.falliSubiti = numeriRandom(2, 100);
    const {nome} = squadreCalcio[index];
    const {falliSubiti} = squadreCalcio[index];
    risultatoFinale.push({nome, falliSubiti})
});

//Creiamo un ciclo for e stampiamo i risultati in console

for (let i = 0; i < risultatoFinale.length; i++) {
    console.log(`Squadra: ${risultatoFinale[i].nome}, Falli subiti: ${risultatoFinale[i].falliSubiti}`);
}