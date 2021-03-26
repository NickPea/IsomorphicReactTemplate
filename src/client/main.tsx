//

import React from "react";
import reactDom from "react-dom";
import IsoApp from "../iso-app/app";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createIsoStore } from "../iso-app/state/store";

const BrowserApp = () => {
	//

	const initialServerState = (window as any).__INITIAL_SERVER_STATE__;
	// delete (window as any).__INITIAL_SERVER_STATE__;

	const store = createIsoStore(initialServerState);

	return (
		<Provider store={store}>
			<Router>
				<IsoApp />
			</Router>
		</Provider>
	);
};

reactDom.hydrate(<BrowserApp />, document.getElementById("root"));
