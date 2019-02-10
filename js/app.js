// React Tree House Course
	const title = React.createElement(
		// type of element, usually a string which represents an html element or tag
		'h1',
		//Second arg is an object containint any attributes or value you want to give the element, or null
		{ id: 'main-title'},
		// Third arg is any children you want to pass in, or null
		'Pizza Time!'
	);

	const desc = React.createElement(
		'p',
		null,
		'Let\'s Eat'
	);

	const header = React.createElement(
		'header',
		null,
		title, 
		desc
	);


	ReactDOM.render(
		header,
		//Mount into the container ID 
		document.getElementById('container')
	);