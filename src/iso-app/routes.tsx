//
import React, { Fragment } from "react";
import HomePage from "./pages/home";
import FeaturePage from "./pages/feature";
import { Switch, Route } from "react-router-dom/";

export const routesArray = [
	{ path: "/feature", component: <FeaturePage /> },
	{ path: "/*", component: <HomePage /> },
];

const routeMap = routesArray.map((route, index) => {
	return (
		<Route key={index} path={route.path}>
			{route.component}
		</Route>
	);
});

export default () => {
	return (
			<Switch>{routeMap}</Switch>
	);
};
