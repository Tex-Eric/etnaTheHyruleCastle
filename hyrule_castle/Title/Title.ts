const readline = require('readline-sync');
const clear = require('clear');

const textN = `\n`;
const text1 = `Projet HEIR's THAOS\n`;
const text2 = `Appuyez sur Entree\n`;
const text3 = `Ok, bien joue, appuie sur "y" pour continuer :\n`;
const armes = ['epee & bouclier', 'lance & bouclier', 'grosse Epee'];
const text4 = `Très bien... Bon choisie un de ces objets.\n`;

const textBad = `\nT'es vraiment nul, on t'a dit de faire un truc et tu t'es loupé. Bon, laisse tomber\n`;
const textFin = `Fin de partie, appuie sur n'importe quoi.`;

const gameEnd = () => {
    readline.question(textFin);
    clear();
}

const Title = () => {
    clear();

    console.log(text1);
    console.log(textN);
    const answer1 = readline.question(text2);
    if (answer1 !== '') {
        console.log(textBad);
        return gameEnd();
    }

    const answer2 = readline.keyInYN(text3);
    if (!answer2) {
        console.log(textBad);
        return gameEnd();
    }

    const answer3 = readline.keyInSelect(armes, text4);
    if (answer3 === -1) {
        console.log(textBad);
        return gameEnd();
    }

    console.log(`Bien joué, le test est fini.\n`);
    clear();
};

export default Title;