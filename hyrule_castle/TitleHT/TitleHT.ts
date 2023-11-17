const readline = require('readline-sync');
const clear = require('clear');
import castle from './Castle'

const textN = `\n`;
/* const text1 = `Projet HEIR's THAOS\n`; */
const text2 = `Appuyez sur Entree\n`;
/* const text3 = `Ok, bien joue, appuie sur "y" pour continuer :\n`;
const armes = ['epee & bouclier', 'lance & bouclier', 'grosse Epee'];
const text4 = `Très bien... Bon choisie un de ces objets.\n`; */

/* const textBad = `\nT'es vraiment nul, on t'a dit de faire un truc et tu t'es loupé. Bon, laisse tomber\n`;
const textFin = `Fin de partie, appuie sur n'importe quoi.`; */

const TitleHT = () => {
    clear();

    console.log(castle);
    console.log(textN);
    readline.question(text2);

    clear();
};

export default TitleHT;