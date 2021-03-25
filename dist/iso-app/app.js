"use strict";
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = (function (_a) {
    var url = _a.url;
    return react_1.default.createElement("div", null,
        "I'mma rendering yo! @ ",
        url);
});
