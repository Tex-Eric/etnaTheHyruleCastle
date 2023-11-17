"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require('readline-sync');
var clear = require('clear');
var TitleHT_1 = require("./TitleHT/TitleHT");
var Presentation_1 = require("./Presentation/Presentation");
var Fight_1 = require("./Fight/Fight");
var FightBoss_1 = require("./FightBoss/FightBoss");
var Victory_1 = require("./JSData/Image/Victory");
var Defeat_1 = require("./JSData/Image/Defeat");
var Heros_1 = require("./JSData/Heros");
var heroName = Heros_1.default[0].nom;
var heroPVCurrent = Heros_1.default[0].PV;
var heroPVTotal = Heros_1.default[0].PV;
var heroAtt = Heros_1.default[0].Att;
var textFin = "Fin de partie. Merci d'avoir jou\u00E9. Appuie sur n'importe quoi.";
var textBadFin = "Vous avez perdu. Mais ne vous en faites pas. Ce n'est qu'un jeu.";
var textGoodFin = "Vous avez gagn\u00E9 !!!";
var gameEnd = function () {
    readline.question(textGoodFin);
    console.log(Victory_1.default);
    readline.question(textFin);
    clear();
};
var gameBadEnd = function () {
    console.log(Defeat_1.default);
    readline.question(textBadFin);
    readline.question(textFin);
    clear();
};
var isGameOver = function () { return heroPVCurrent <= 0; };
(0, TitleHT_1.default)();
for (var i = 0; i < 9; i++) {
    (0, Presentation_1.default)(i);
    heroPVCurrent = (0, Fight_1.default)(heroName, heroPVCurrent, heroPVTotal, heroAtt);
    if (isGameOver()) {
        gameBadEnd();
        break;
    }
}
if (!isGameOver()) {
    (0, Presentation_1.default)(9);
    heroPVCurrent = (0, FightBoss_1.default)(heroName, heroPVCurrent, heroPVTotal, heroAtt);
    if (isGameOver()) {
        gameBadEnd();
    }
    else {
        gameEnd();
    }
}
