//

import React from "react";
import reactDomServer from "react-dom/server";
import IsoApp from "../../iso-app/app";
import htmlTemplate from "./html-template";
import { StaticRouter as Router } from "react-router-dom";

export default class {
	//

	static renderAppToHtml(url: string) {
		//

		//prepare iso-app with server rendered wrappers
		const ServerApp = () => {
			return (
				<Router location={url}>
					<IsoApp />
				</Router>
			);
		};

		//render server-app components to string
		const appRender = reactDomServer.renderToString(<ServerApp />);

		//insert app string into html template
		const htmlRender = htmlTemplate(appRender, "", "client.js");

		return htmlRender;
	}
}
