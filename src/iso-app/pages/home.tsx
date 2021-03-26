//

import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

export default () => {
	const state = useSelector((state: RootStateOrAny) => state);
	
	return (
		<div>
			<div>Home Page</div>
			<div>State: {JSON.stringify(state)}</div>
		</div>
	);
};
