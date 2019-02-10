// React Tree House Course
	const title = <h1>Pizza Time</h1>;
	const des = <p>Let's Eat</p>;

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