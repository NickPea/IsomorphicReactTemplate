//

import React from "react";
import reactDom from "react-dom";
import IsoApp from "../iso-app/app";
import { BrowserRouter as Router } from "react-router-dom";

const BrowserApp = () => {
	return (
		<Router>
			<IsoApp />
		</Router>
	);
};

reactDom.hydrate(<BrowserApp />, document.getElementById("root"));
