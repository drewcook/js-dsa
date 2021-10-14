"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
const log = (...rest) => console.log(util_1.default.inspect(rest, { depth: null }));
exports.default = log;
//# sourceMappingURL=log.js.map