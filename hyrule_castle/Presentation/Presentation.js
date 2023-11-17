"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require('readline-sync');
var clear = require('clear');
var Floor_1 = require("../JSData/Floor");
var FloorImage_1 = require("./FloorImage");
var Presentation = function (floorNumber) {
    var textN = "\n";
    var text2 = "Appuyez sur Entree\n";
    console.log("\u00C9tage ".concat(floorNumber + 1, " : ").concat(Floor_1.default[floorNumber].nom, "\n"));
    console.log(FloorImage_1.default);
    console.log("".concat(Floor_1.default[floorNumber].description, "\n"));
    console.log(textN);
    readline.question(text2);
};
exports.default = Presentation;
