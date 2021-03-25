//

import { NextFunction, Response, Request } from "express";
import RenderService from "./render-service";

export default class {
	//

	static getApp(req: Request, res: Response, next: NextFunction) {
		//
		const url = req.url;

		const htmlApp = RenderService.renderAppToHtml(url);

		res.send(htmlApp);
	}
}
