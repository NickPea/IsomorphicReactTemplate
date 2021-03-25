//

import express from "express";

export const app = express();

import ServeAppController from '../serve-app/controller'

app.use("/", ServeAppController.getApp);