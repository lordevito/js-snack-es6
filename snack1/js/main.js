`use strict`;


//Creiamo un array di oggetti con, ognuno, nome e peso della bici.
//Creiamo anche un array vuoto che andremo a riempire solo con il peso delle bici

const pesi = [];
const bici = [
    
    {
        nome: 'Bici1',
        peso: '24'
    },
    {
        nome: 'Bici2',
        peso: '17'
    },
    {
        nome: 'Bici3',
        peso: '14'
    },
    {
        nome: 'Bici4',
        peso: '18'
    },
    {
        nome: 'Bici5',
        peso: '19'
    }
];

//Creiamo un ciclo forEach per prendere il dato del peso delle bici e spostarli nell'array vuoto

bici.forEach((element, index) => {
    pesi.push(element.peso);
    const {nome, peso} = bici[index];
});

//Creiamo una variabile e usiamo il metodo math.min per prendere il valore più basso

const biciLeggera = Math.min(...pesi);

//Creiamo una variabile per agganciarci l'elemento nel dom e trmite
//template literal lo stampiamo a schermo

const list = document.getElementById(`list`);
list.innerHTML += `La bici più leggera pesa ${biciLeggera}kg`;


