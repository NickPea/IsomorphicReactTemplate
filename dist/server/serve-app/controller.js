"use strict";
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var render_service_1 = __importDefault(require("./render-service"));
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    //
    default_1.getApp = function (req, res, next) {
        //
        var url = req.url;
        var htmlApp = render_service_1.default.renderAppToHtml(url);
        res.send(htmlApp);
    };
    return default_1;
}());
exports.default = default_1;
