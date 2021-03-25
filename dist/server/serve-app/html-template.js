"use strict";
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (render, state, bundle, head, lang) {
    if (head === void 0) { head = "<title>App</title>"; }
    if (lang === void 0) { lang = "en"; }
    return "\n\t\t<!DOCTYPE html>\n\t\t<html lang=" + lang + ">\n\t\t<head>\n\t\t\t<meta charset=\"UTF-8\">\n\t\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t\t\t" + head + "\n\t\t</head>\n\t\t<body>\n\t\t\t<div id=\"root\">\n\t\t\t\t" + render + "\n\t\t\t</div>\n\t\t\t" + (state || '') + "\n\t\t\t" + (bundle || '') + "\n\t\t</body>\n\t\t</html>\n    ";
});
