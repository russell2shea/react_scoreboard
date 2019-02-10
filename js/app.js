// React Tree House Course
	
	// React components are required to have a capital letter to start
	const Header = (props) => {
		console.log(props);
		return (
			React.createElement("header", null, 
				React.createElement("h1", null, props.title), 
				React.createElement("span", {className: "stats"}, "Players: ", props.totalPlayers + 2)
			)
		);
	}

	// Create Counters 
	const Counters = () =>{
		return (

			React.createElement("div", {className: "counter"}, 
				React.createElement("button", {className: "counter-action decrement"}, " - "), 
				React.createElement("span", {className: "counter-score"}, "35"), 
				React.createElement("button", {className: "counter-action increment"}, " + ")
			)

		);
	}

	// Create Players 
	const Players = () =>{
		return (
			React.createElement("div", {className: "player"}, 
				React.createElement("span", {className: "player-name"}, 
					"Bob"
				), 

				React.createElement(Counters, null)

			)
		);
	}

	// Compose all components together
	const App = () => {
		return (
			React.createElement("div", {className: "scoreboard"}, 
				React.createElement(Header, {title: "Scoreboard", totalPlayers: 1}), 

				/* Players list */
				React.createElement(Players, null)
			)
		);
	}

	// Render Root level component to the Dom
	ReactDOM.render(
		// Can self close since this has no children
		React.createElement(App, null),

		//Mount into the container ID 
		document.getElementById('container')
	); 