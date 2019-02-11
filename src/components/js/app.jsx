// React Tree House Course
	
	// Array of players
	const players =[
	  {
	    name: "Guil",
	    score: 50, 
	    id: 1
	  },
	  {
	    name: "Treasure",
	    score: 85,
	    id: 2
	  },
	  {
	    name: "Ashley",
	    score: 95,
	    id: 3
	  },
	  {
	    name: "James",
	    score: 80,
	    id: 4
	  }
	]


	// React components are required to have a capital letter to start
	const Header = (props) => {
		console.log(props);
		return (
			<header>
				<h1>{props.title}</h1>
				<span className="stats">Players: {props.totalPlayers}</span>
			</header>
		);
	}

	// Create Counters 
	class Counters extends React.Component{

		constructor() {
			super()
			this.state = {
				score: 0 
			};
		}

		/* Method to increment score */
		incrementScore(){
			//let react know state is changing, and it needs to re-render
			this.setState(prevState => {
				return {
						score:prevState.score + 1
					};
			});

			/* This approach is asynchronous 
			this.setState({score: this.state.score + 1});
			*/
		}


		/* Method to decrement score */
		decrementScore(){

			if(this.state.score > 0){
				this.setState(prevState => {
					return {
							score:prevState.score - 1
						};
				});
			}
		}


		render(){
			return (
				<div className="counter">
					<button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
					<span className="counter-score">{this.state.score}</span>
					<button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
				</div>

			);
		}

	}

	// Create Players 
	const Player = (props) =>{
		return (
			<div className="player">
				<span className="player-name">
					{props.name}
				</span>

				<Counters />

			</div>
		);
	}

	// Compose all components together
	const App = (props) => {
		return (
			<div className="scoreboard">
				<Header 
					title="Scoreboard" 
					totalPlayers={props.initialPlayers.length} 
				/>

				{/* Players list. Interate over players array */}
				{props.initialPlayers.map(
					player => 

					<Player 
						name={player.name}
						key={player.id.toString()}
					/>
				
				)}


			</div>
		);
	}

	// Render Root level component to the Dom
	ReactDOM.render(
		// Can self close since this has no children
		<App 
			initialPlayers={players}
		/>,

		//Mount into the container ID 
		document.getElementById('container')
	); 