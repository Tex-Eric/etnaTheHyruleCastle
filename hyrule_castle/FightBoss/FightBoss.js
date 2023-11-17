"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require('readline-sync');
var clear = require('clear');
var Boss_1 = require("../JSData/Boss");
var FightBoss = function (heroName, heroPVCurrent, heroPVTotal, heroAtt) {
    var vilainName = Boss_1.default[0].nom;
    var vilainPVCurrent = Boss_1.default[0].PV;
    var vilainPVTotal = Boss_1.default[0].PV;
    var vilainAtt = Boss_1.default[0].Att;
    var VilainImage = Boss_1.default[0].image;
    var textN = "\n";
    var text1 = 'Regarde, il y un méchant devant toi. Il va falloir combattre ';
    var text2 = 'Match Fini !\n';
    var text3 = "Appuyez sur Entree";
    var battleOptions = ['Battre', 'Se soigner', 'Fuire'];
    var textBatlleOption = "Choisie une option\n";
    var textBatlleOption0 = "Vous avez infligu\u00E9 ".concat(heroAtt, " points de d\u00E9gats");
    var textBatlleOption2 = "L'ennemi vous a infligu\u00E9  ".concat(vilainAtt, " points de d\u00E9gats");
    var textBatlleOption3 = "Vous vous \u00EAtes soign\u00E9 la moiti\u00E9 de vos PV";
    var textBatlleOption1 = "Oui, en vrai, il est pas tr\u00E8s rapide";
    var textBatlleOptionNULL = "Faut que tu fasses quelque chose, sinon, il va te faire du mal.";
    var healthBar = function (currentPV, totalPV) {
        var PV1 = '';
        var PVT = '';
        for (var i = 0; i < currentPV; i++) {
            PV1 = '█';
            PVT += PV1;
        }
        for (var j = 0; j < (totalPV - currentPV); j++) {
            PV1 = '░';
            PVT += PV1;
        }
        return PVT;
    };
    var interfaceBattle = function (nameString, current, total) {
        console.log("".concat(nameString, " : ").concat(healthBar(current, total), " ").concat(current, "/").concat(total));
    };
    clear();
    console.log(text1 + vilainName + ' !\n');
    console.log(VilainImage);
    readline.question(text3);
    clear();
    while (vilainPVCurrent > 0 && heroPVCurrent > 0) {
        console.log(VilainImage);
        interfaceBattle(vilainName, vilainPVCurrent, vilainPVTotal);
        interfaceBattle(heroName, heroPVCurrent, heroPVTotal);
        var answer1 = readline.keyInSelect(battleOptions, textBatlleOption);
        if (answer1 === 0) {
            vilainPVCurrent -= heroAtt;
            heroPVCurrent -= vilainAtt;
            console.log(textN);
            console.log(textBatlleOption0);
            console.log(textBatlleOption2);
            console.log(textN);
            readline.question(text3);
            clear();
        }
        else if (answer1 === 1) {
            console.log(textN);
            heroPVCurrent = Math.min(heroPVCurrent + (heroPVTotal / 2), heroPVTotal);
            heroPVCurrent -= vilainAtt;
            console.log(textBatlleOption3);
            console.log(textBatlleOption2);
            console.log(textN);
            readline.question(text3);
            clear();
        }
        else if (answer1 === 2) {
            console.log(textN);
            vilainPVCurrent -= vilainPVCurrent;
            console.log(textBatlleOption1);
            console.log(textN);
            readline.question(text3);
            clear();
        }
        else {
            console.log(textN);
            console.log(textBatlleOptionNULL);
            console.log(textN);
            readline.question(text3);
            clear();
        }
    }
    console.log(text2);
    readline.question(text3);
    clear();
    return heroPVCurrent;
};
exports.default = FightBoss;
