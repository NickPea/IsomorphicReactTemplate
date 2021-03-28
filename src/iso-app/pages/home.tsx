//

import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ApiService from "../../server/serve-api/api-service";

interface PageElement {
	(): JSX.Element;
	getPrefetchFunctions: () => {};
}

const HomePage: PageElement = () => {
	const state = useSelector((state: RootStateOrAny) => state);

	return (
		<div>
			<div>Home Page</div>
			<div>State: {JSON.stringify(state)}</div>
			<Link to='/'>Home</Link>
			<Link to='/feature'>Feature</Link>
		</div>
	);
};

//ssr prefect
HomePage.getPrefetchFunctions = function() {
	return [
		async (params: object) => {
			return await ApiService.generateFakeData();
		},
	];
};

export default HomePage;
