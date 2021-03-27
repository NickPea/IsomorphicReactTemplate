//

export default (
	render?,
	initialState?,
	bundlePath?,
	head = "<title>App</title>",
	lang = "en"
) => {
	return `
		<!DOCTYPE html>
		<html lang=${lang}>
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			${head}
		</head>
		<body>
			<div id="root">
				${render}
			</div>
			
			<script>
				window.__INITIAL_SERVER_STATE__ = JSON.parse('${JSON.stringify(initialState)||null}');
			</script>

			<script src="${bundlePath||null}"></script>
			
		</body>
		</html>
    `;
};
