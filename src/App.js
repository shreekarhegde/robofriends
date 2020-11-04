import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList/CardList';
import SearchBox from './SearchBox/SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			searchField: '',
			robots: robots,
		};
	}

	onSearchChange = (event) => {
		console.log('event', event);
		this.setState({ searchField: event.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div>
				<h1>Robo Friends</h1>
				<div>
					<SearchBox searchChange={this.onSearchChange} />
					<CardList robots={filteredRobots} />
				</div>
			</div>
		);
	}
}

export default App;
