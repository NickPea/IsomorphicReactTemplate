//

import express from "express";
import path from 'path';
import ServeAppController from '../serve-app/controller'

export const app = express();

//assets
app.use(express.static(path.resolve('dist')))

//
app.use("/", ServeAppController.getApp);