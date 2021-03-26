//

import RenderService from "./ssr-service";

export default class {
	//

	static getApp(req, res) {
		//

		const url = req.url;

		const htmlApp = RenderService.renderAppToHtml(url);
		
		res.send(htmlApp);
	}
}
