//
import React from "react";
import HomePage from "./pages/home";
import FeaturePage from "./pages/feature";
import { Switch, Route } from "react-router-dom/";

export const routeList = [
	{ path: "/feature", component: FeaturePage },
	{ path: "/", component: HomePage },
];

const routeMap = routeList.map((route, index) => {
	return (
		<Route key={index} path={route.path} exact>
			{React.createElement(route.component, null, null)}
		</Route>
	);
});

export default () => {
	return (
		<Switch>
			{routeMap}
			<Route path="*">
				<div>404: page not found</div>
			</Route>
		</Switch>
	);
};
