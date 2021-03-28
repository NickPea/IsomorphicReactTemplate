//

import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles((theme) => ({
	monkey: {
		backgroundColor: "blueviolet",
	},
}));

const MockPage = () => {
	//

	const jssClasses = useStyles();

	return (
		<div>
			<div>Feature Page</div>
			<div className={jssClasses.monkey} >I'mma stylin Up in 'ere!</div>
			<Link to='/'>Home</Link>
			<Link to='/feature'>Feature</Link>
		</div>
	);
};

MockPage.getPrefetchFunctions = () => {
	return [() => {}];
};

export default MockPage;
