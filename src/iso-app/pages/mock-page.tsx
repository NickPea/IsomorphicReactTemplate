//

import React from "react";
//components
import HomeOverview from '../components/HeroOverview';

const FeaturePage = () => {
	return (
		<div>
			<div>Feature Page</div>
			<HomeOverview />
		</div>
	);
};

FeaturePage.getPrefetchFunctions = () => {
	return [
		(routeParams:object)=>{}
	];
};

export default FeaturePage;
