import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../actions';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import { REQUEST_ROBOTS_FAIL } from '../constants';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	};
};

const mapDispatchToPorps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	};
};

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { robots, searchField, onSearchChange, isPending } = this.props;
		console.log('====================================');
		console.log('props', this.props);
		console.log('====================================');
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? (
			<h1>Loading</h1>
		) : (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToPorps)(App);
