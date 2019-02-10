// React Tree House Course
	
	// React components are required to have a capital letter to start
	const Header = (props) => {
		console.log(props);
		return (
			<header>
				<h1>{props.title}</h1>
				<span className="stats">Players: {props.totalPlayers + 2}</span>
			</header>
		);
	}

	// Create Counters 
	const Counters = () =>{
		return (

			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">35</span>
				<button className="counter-action increment"> + </button>
			</div>

		);
	}

	// Create Players 
	const Players = () =>{
		return (
			<div className="player">
				<span className="player-name">
					Bob
				</span>

				<Counters />

			</div>
		);
	}

	// Compose all components together
	const App = () => {
		return (
			<div className="scoreboard">
				<Header title="Scoreboard" totalPlayers={1} />

				{/* Players list */}
				<Players />
			</div>
		);
	}

	// Render Root level component to the Dom
	ReactDOM.render(
		// Can self close since this has no children
		<App />,

		//Mount into the container ID 
		document.getElementById('container')
	); 