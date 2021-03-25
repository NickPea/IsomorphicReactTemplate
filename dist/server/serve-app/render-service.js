"use strict";
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
var app_1 = __importDefault(require("../../iso-app/app"));
var html_template_1 = __importDefault(require("./html-template"));
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    //
    default_1.renderAppToHtml = function (url) {
        //render react components to string
        var appRender = server_1.default.renderToString(react_1.default.createElement(app_1.default, { url: url }));
        //wrap render in html
        var htmlRender = html_template_1.default(appRender);
        return htmlRender;
    };
    return default_1;
}());
exports.default = default_1;
