"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toCapitalizeCase_1 = __importDefault(require("./toCapitalizeCase"));
describe("toTitleCase", function () {
    it("works properly", function () {
        expect(toCapitalizeCase_1.default("hello world")).toEqual("Hello World");
    });
});
