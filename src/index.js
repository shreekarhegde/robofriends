import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './containers/App';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
