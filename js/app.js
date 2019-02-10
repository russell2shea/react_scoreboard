// React Tree House Course
	const title = React.createElement("h1", null, "Pizza Time");
	const des = React.createElement("p", null, "Let's Eat");

	const header = React.createElement(
		'header',
		null,
		title, 
		des
	); 

	ReactDOM.render(
		header,
		//Mount into the container ID 
		document.getElementById('container')
	); 