'use strict';

// Récuperation des éléments
const btnWhile = document.getElementById('btn-while');
const btnDoWhile = document.getElementById('btn-do-while');
const btnFor = document.getElementById('btn-for');

const DEBUT_COUNT = 0;
const FIN_COUNT = 5;

// Regle par rapport au boucle
// - Quelle est le but de la boucle ?
// - Comment maitriser la boucle ?     => La condition d'arrêt
// - Quel est le code a executer ?     => Identifier le code à répéter 


// While
// *****
// 1) Vérifier la condition
// 2) Si la condition est 'vrai'
//     - Elle execute le code
//     - Retour à la condition (Etape 1)
// 3) Si la condition est 'fausse'
//     - Arrêt de la "boucle"
btnWhile.addEventListener('click', () => {
    console.log('Debut "while"');

    let count = DEBUT_COUNT;
    while(count <= FIN_COUNT) {
        console.log(`Valeur du compteur : ${count}`);
        count++;
    }

    console.log('Fin "while"');
})

// Do...While
// **********
// 1) Elle execute le code
// 2) Vérifie la condtition
// 3) Si la condition est 'vrai'
//      - Retour à l'étape 1
// 4) Si la contition est 'fausse'
//      - Arrêt de la "boucle"
btnDoWhile.addEventListener('click', () => {
    console.log('Debut "do...while"');

    let count = DEBUT_COUNT;
    do {
        console.log(`La valeur du compteur : ${count}`);
        count++;
    }while(count <= FIN_COUNT);

    console.log('Debut "fin...while"');
})