"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uniqueArray_1 = __importDefault(require("./uniqueArray"));
describe("uniqueArray", function () {
    it("works properly", function () {
        var unique = uniqueArray_1.default(["hello", "hello", "world", "world"]);
        expect(unique).toEqual(["hello", "world"]);
    });
});
