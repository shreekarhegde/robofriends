import React, { Component } from 'react';
import { robots } from '../robots';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			searchField: '',
			robots: robots,
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div className='tc'>
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
