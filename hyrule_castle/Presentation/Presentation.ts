const readline = require('readline-sync');
const clear = require('clear');
import Floor from "../JSData/Floor";
import FloorImage from "./FloorImage";

const Presentation = (floorNumber) => {

    const textN = `\n`;
    const text2 = `Appuyez sur Entree\n`;

    console.log(`Étage ${floorNumber + 1} : ${Floor[floorNumber].nom}\n`);
    console.log(FloorImage);
    console.log(`${Floor[floorNumber].description}\n`);
    console.log(textN);
    readline.question(text2);
}

export default Presentation;
