"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// React Tree House Course

// React components are required to have a capital letter to start
var Header = function Header(props) {
	console.log(props);
	return React.createElement(
		"header",
		null,
		React.createElement(
			"h1",
			null,
			props.title
		),
		React.createElement(
			"span",
			{ className: "stats" },
			"Players: ",
			props.totalPlayers
		)
	);
};

// Create Counters 

var Counters = function (_React$Component) {
	_inherits(Counters, _React$Component);

	function Counters() {
		_classCallCheck(this, Counters);

		var _this = _possibleConstructorReturn(this, (Counters.__proto__ || Object.getPrototypeOf(Counters)).call(this));

		_this.state = {
			score: 0
		};
		return _this;
	}

	/* Method to increment score */


	_createClass(Counters, [{
		key: "incrementScore",
		value: function incrementScore() {
			//let react know state is changing, and it needs to re-render
			this.setState(function (prevState) {
				return {
					score: prevState.score + 1

				};
			});

			/* This approach is asynchronous 
   this.setState({score: this.state.score + 1});
   */
		}

		/* Method to decrement score */

	}, {
		key: "decrementScore",
		value: function decrementScore() {

			if (this.state.score > 0) {
				this.setState(function (prevState) {
					return {
						score: prevState.score - 1
					};
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				{ className: "counter" },
				React.createElement(
					"button",
					{ className: "counter-action decrement", onClick: function onClick() {
							return _this2.decrementScore();
						} },
					" - "
				),
				React.createElement(
					"span",
					{ className: "counter-score" },
					this.state.score
				),
				React.createElement(
					"button",
					{ className: "counter-action increment", onClick: function onClick() {
							return _this2.incrementScore();
						} },
					" + "
				)
			);
		}
	}]);

	return Counters;
}(React.Component);

// Create Players 


var Player = function Player(props) {
	return React.createElement(
		"div",
		{ className: "player" },
		React.createElement(
			"span",
			{ className: "player-name" },
			React.createElement(
				"button",
				{ className: "remove-player", onClick: function onClick() {
						return props.removePlayer(props.id);
					} },
				"\u2716"
			),
			props.name
		),
		React.createElement(Counters, null)
	);
};

// Compose all components together

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App() {
		_classCallCheck(this, App);

		var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this3.handelRemovePlayer = function (id) {

			_this3.setState(function (prevState) {
				return {
					players: prevState.players.filter(function (p) {
						return p.id !== id;
					})
				};
			});

			/*
   			console.log(this);
   
   			this.setState(prevState => ({
   				players: prevState.players.filter(p => p.id !== id)
   			}));
   */
		};

		_this3.state = {
			players: [{
				name: "Guil",
				id: 1
			}, {
				name: "Treasure",
				id: 2
			}, {
				name: "Ashley",
				id: 3
			}, {
				name: "James",
				id: 4
			}]
		};
		return _this3;
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			var _this4 = this;

			return React.createElement(
				"div",
				{ className: "scoreboard" },
				React.createElement(Header, {
					title: "Scoreboard",
					totalPlayers: this.state.players.length
				}),
				this.state.players.map(function (player) {
					return React.createElement(Player, {
						name: player.name,
						id: player.id,
						key: player.id.toString(),
						removePlayer: _this4.handelRemovePlayer
					});
				})
			);
		}
	}]);

	return App;
}(React.Component);

// Render Root level component to the Dom


ReactDOM.render(
// Can self close since this has no children
React.createElement(App, null),

//Mount into the container ID 
document.getElementById('container'));