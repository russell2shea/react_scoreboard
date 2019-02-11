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
			React.createElement("header", null, 
				React.createElement("h1", null, props.title), 
				React.createElement("span", {className: "stats"}, "Players: ", props.totalPlayers)
			)
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
				React.createElement("div", {className: "counter"}, 
					React.createElement("button", {className: "counter-action decrement", onClick: () => this.decrementScore()}, " - "), 
					React.createElement("span", {className: "counter-score"}, this.state.score), 
					React.createElement("button", {className: "counter-action increment", onClick: () => this.incrementScore()}, " + ")
				)

			);
		}

	}

	// Create Players 
	const Player = (props) =>{
		return (
			React.createElement("div", {className: "player"}, 
				React.createElement("span", {className: "player-name"}, 
					props.name
				), 

				React.createElement(Counters, null)

			)
		);
	}

	// Compose all components together
	const App = (props) => {
		return (
			React.createElement("div", {className: "scoreboard"}, 
				React.createElement(Header, {
					title: "Scoreboard", 
					totalPlayers: props.initialPlayers.length}
				), 

				/* Players list. Interate over players array */
				props.initialPlayers.map(
					player => 

					React.createElement(Player, {
						name: player.name, 
						key: player.id.toString()}
					)
				
				)


			)
		);
	}

	// Render Root level component to the Dom
	ReactDOM.render(
		// Can self close since this has no children
		React.createElement(App, {
			initialPlayers: players}
		),

		//Mount into the container ID 
		document.getElementById('container')
	); 