//

import React from "react";

const FeaturePage = () => {
	return (
		<div>
			<div>Feature Page</div>
		</div>
	);
};

FeaturePage.getPrefetchFunctions = () => {
	return [
		()=>{}
	];
};

export default FeaturePage;
