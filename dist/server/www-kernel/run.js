"use strict";
//
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var app_2 = require("../config/app");
var port = app_2.config.port;
app_1.app.listen(port, function () { return console.log("\n-- Express Listening on Port: " + port + " --"); });
