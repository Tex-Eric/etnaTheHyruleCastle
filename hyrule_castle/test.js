const readline = require('readline-sync') 

const text1= 'Bonjour, je suis le premier texte, bienvenu dans Hyrule Castle';
const text2= 'Appui sur entrée pour continuer';
const text3= 'Bravo, le jeu est fini';

console.log(text1);
const answer = readline.question(text2);
if(answer === ''){
    console.log(text3);
}else if(answer === 'yes'){
    console.log('Toto')
}