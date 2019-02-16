// React Tree House Course
	
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
			this.setState(prevState => ({
				score:prevState.score + 1

			}));

			/* This approach is asynchronous 
			this.setState({score: this.state.score + 1});
			*/
		}


		/* Method to decrement score */
		decrementScore(){

			if(this.state.score > 0){
				this.setState(prevState => ({
					score:prevState.score - 1
				}));
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
					<button className="remove-player" onClick={ () => props.removePlayer(props.id)}>✖</button>
					{props.name}
				</span>

				<Counters />

			</div>
		);
	}

	// Compose all components together
	class App extends React.Component {


		constructor() {
			super()
			this.state = {
				players: [
					  {
					    name: "Guil",
					    id: 1
					  },
					  {
					    name: "Treasure",
					    id: 2
					  },
					  {
					    name: "Ashley",
					    id: 3
					  },
					  {
					    name: "James",
					    id: 4
					  }
				]
			};
		}

		handelRemovePlayer = (id) => {

			this.setState(prevState =>{
				return{
					players: prevState.players.filter(p => p.id !== id)
				}
			});

/*
			console.log(this);

			this.setState(prevState => ({
				players: prevState.players.filter(p => p.id !== id)
			}));
*/
		}

		render(){
			return (
				<div className="scoreboard">
					<Header 
						title="Scoreboard" 
						totalPlayers={this.state.players.length} 
					/>

					{/* Players list. Interate over players array */}
					{this.state.players.map(
						player => 

						<Player 
							name={player.name}
							id={player.id}
							key={player.id.toString()}
							removePlayer={this.handelRemovePlayer}
						/>
					
					)}


				</div>
			);
		}



	}

	// Render Root level component to the Dom
	ReactDOM.render(
		// Can self close since this has no children
		<App />,

		//Mount into the container ID 
		document.getElementById('container')
	); 