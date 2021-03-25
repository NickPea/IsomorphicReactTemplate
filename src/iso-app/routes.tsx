//
import React from 'react'

import HomePage from "./pages/home";
import FeaturePage from "./pages/feature";
import { Switch, Route } from "react-router-dom/";

const routes = [
	{ path: "/feature", component: FeaturePage },
	{ path: "/", component: HomePage },
];

const routeMap = routes.map((route, index) => {
	return (
		<Route key={index} path={route.path}>
			{route.component}
		</Route>
	);
});

export default () => {
	return <Switch>${routeMap}</Switch>;
};
