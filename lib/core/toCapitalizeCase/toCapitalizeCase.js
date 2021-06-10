"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toCapitalizeCase = function (str) {
    return str
        .split(" ")
        .map(function (word) {
        var splitByCharacters = word.split("");
        splitByCharacters[0] = splitByCharacters[0].toUpperCase();
        return splitByCharacters.join("");
    })
        .join(" ");
};
exports.default = toCapitalizeCase;
