const readline = require('readline-sync');
const clear = require('clear');
import TitleHT from "./TitleHT/TitleHT";
import Presentation from "./Presentation/Presentation";
import Fight from "./Fight/Fight";
import FightBoss from "./FightBoss/FightBoss";
import Victory from "./JSData/Image/Victory";
import Defeat from "./JSData/Image/Defeat";

import Hero from "./JSData/Heros";

let heroName = Hero[0].nom;
let heroPVCurrent = Hero[0].PV;
let heroPVTotal = Hero[0].PV;
let heroAtt = Hero[0].Att;

const textFin = `Fin de partie. Merci d'avoir joué. Appuie sur n'importe quoi.`;
const textBadFin = `Vous avez perdu. Mais ne vous en faites pas. Ce n'est qu'un jeu.`;
const textGoodFin = `Vous avez gagné !!!`;
const gameEnd = () => {
    readline.question(textGoodFin);
    console.log(Victory);
    readline.question(textFin);
    clear();
}
const gameBadEnd = () => {
    console.log(Defeat);
    readline.question(textBadFin);
    readline.question(textFin);
    clear();
}

const isGameOver = () => heroPVCurrent <= 0;

TitleHT();

for (let i = 0; i < 9; i++) {
    Presentation(i);
    heroPVCurrent = Fight(heroName, heroPVCurrent, heroPVTotal, heroAtt);

    if (isGameOver()) {
        gameBadEnd();
        break;
    }
}

if (!isGameOver()) {
    Presentation(9);
    heroPVCurrent = FightBoss(heroName, heroPVCurrent, heroPVTotal, heroAtt);

    if (isGameOver()) {
        gameBadEnd();
    }else{
        gameEnd();
    }
}
