"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGeolocation = exports.useQuery = void 0;
var useQuery_1 = require("./useQuery");
Object.defineProperty(exports, "useQuery", { enumerable: true, get: function () { return __importDefault(useQuery_1).default; } });
var useGeolocation_1 = require("./useGeolocation");
Object.defineProperty(exports, "useGeolocation", { enumerable: true, get: function () { return __importDefault(useGeolocation_1).default; } });
