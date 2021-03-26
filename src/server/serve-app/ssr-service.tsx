//

import React from "react";
import reactDomServer from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import IsoApp from "../../iso-app/app";
import { createIsoStore } from "../../iso-app/state/store";

import htmlTemplate from "./html-template";

export default class {
	//

	static clientBundlePath = "/client.js";
	static initialState = {
		data: "monkey man rodger ferret face",
		app: "someting app like",
		ui: "2 open modeals",
	};

	static renderAppToHtml(url: string) {
		//

		const store = createIsoStore();

		// if (storeStateHasChanged) {
		//prepare iso-app with server rendered wrappers

		const ServerApp = () => {
			return (
				<Provider store={store}>
					<Router location={url}>
						<IsoApp />
					</Router>
				</Provider>
			);
		};

		//render server-app components to string

		const appRender = reactDomServer.renderToString(<ServerApp />);

		//insert app string into html template
		const htmlRender = htmlTemplate(
			appRender,
			this.initialState,
			this.clientBundlePath
		);

		return htmlRender;
	}
}
