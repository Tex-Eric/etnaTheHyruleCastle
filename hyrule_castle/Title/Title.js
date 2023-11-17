"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require('readline-sync');
var clear = require('clear');
var textN = "\n";
var text1 = "Projet HEIR's THAOS\n";
var text2 = "Appuyez sur Entree\n";
var text3 = "Ok, bien joue, appuie sur \"y\" pour continuer :\n";
var armes = ['epee & bouclier', 'lance & bouclier', 'grosse Epee'];
var text4 = "Tr\u00E8s bien... Bon choisie un de ces objets.\n";
var textBad = "\nT'es vraiment nul, on t'a dit de faire un truc et tu t'es loup\u00E9. Bon, laisse tomber\n";
var textFin = "Fin de partie, appuie sur n'importe quoi.";
var gameEnd = function () {
    readline.question(textFin);
    clear();
};
var Title = function () {
    clear();
    console.log(text1);
    console.log(textN);
    var answer1 = readline.question(text2);
    if (answer1 !== '') {
        console.log(textBad);
        return gameEnd();
    }
    var answer2 = readline.keyInYN(text3);
    if (!answer2) {
        console.log(textBad);
        return gameEnd();
    }
    var answer3 = readline.keyInSelect(armes, text4);
    if (answer3 === -1) {
        console.log(textBad);
        return gameEnd();
    }
    console.log("Bien jou\u00E9, le test est fini.\n");
    clear();
};
exports.default = Title;
