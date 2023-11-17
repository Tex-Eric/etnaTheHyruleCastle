const readline = require('readline-sync');
const clear = require('clear');
import Boss from "../JSData/Boss";

const FightBoss = (heroName, heroPVCurrent, heroPVTotal, heroAtt) => {

    let vilainName = Boss[0].nom;
    let vilainPVCurrent = Boss[0].PV;
    let vilainPVTotal = Boss[0].PV;
    let vilainAtt = Boss[0].Att;
    let VilainImage = Boss[0].image;

    const textN = `\n`;
    const text1 = 'Regarde, il y un méchant devant toi. Il va falloir combattre ';
    const text2 = 'Match Fini !\n';
    const text3 = `Appuyez sur Entree`;

    const battleOptions = ['Battre', 'Se soigner', 'Fuire'];
    const textBatlleOption = `Choisie une option\n`;
    const textBatlleOption0 = `Vous avez infligué ${heroAtt} points de dégats`;
    const textBatlleOption2 = `L'ennemi vous a infligué  ${vilainAtt} points de dégats`;
    const textBatlleOption3 = `Vous vous êtes soigné la moitié de vos PV`;
    const textBatlleOption1 = `Oui, en vrai, il est pas très rapide`;
    const textBatlleOptionNULL = `Faut que tu fasses quelque chose, sinon, il va te faire du mal.`;

    const healthBar = (currentPV, totalPV) => {
        let PV1 = '';
        let PVT = '';
        for(let i =0 ; i < currentPV ; i++){
            PV1 = '█';
            PVT += PV1;
        }
        for(let j =0 ; j < (totalPV-currentPV) ; j++){
            PV1 = '░';
            PVT += PV1;
        }
        return PVT;
    }

    const interfaceBattle = (nameString, current, total) => {
        console.log(`${nameString} : ${healthBar(current, total)} ${current}/${total}`);
    }


        clear();

        console.log(text1+vilainName+' !\n');
        console.log(VilainImage);
        readline.question(text3);
        clear();

        while(vilainPVCurrent > 0 && heroPVCurrent > 0){
            console.log(VilainImage);
            interfaceBattle(vilainName, vilainPVCurrent, vilainPVTotal);
            interfaceBattle(heroName, heroPVCurrent, heroPVTotal);
            const answer1 = readline.keyInSelect(battleOptions, textBatlleOption);
            if(answer1 === 0){
                vilainPVCurrent-=heroAtt;
                heroPVCurrent-=vilainAtt;
                console.log(textN);
                console.log(textBatlleOption0);
                console.log(textBatlleOption2);
                console.log(textN);
                readline.question(text3);
                clear();
            }else if(answer1 === 1){
                console.log(textN);
                heroPVCurrent = Math.min(heroPVCurrent + (heroPVTotal / 2), heroPVTotal);
                heroPVCurrent-=vilainAtt;
                console.log(textBatlleOption3);
                console.log(textBatlleOption2);
                console.log(textN);
                readline.question(text3);
                clear();
            }else if(answer1 === 2){
                console.log(textN);
                vilainPVCurrent-=vilainPVCurrent;
                console.log(textBatlleOption1);
                console.log(textN);
                readline.question(text3);
                clear();
            }else{
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
}

export default FightBoss;
