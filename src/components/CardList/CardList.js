import React from 'react';
import Card from '../Card/Card';

const CardList = (props) => {
	const robots = props.robots;
	const cardComponent = robots.map((robot, index) => {
		return <Card key={index} name={robots[index].name} email={robots[index].email} id={robots[index].id} />;
	});
	return <div>{cardComponent}</div>;
};

export default CardList;
