import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import {robots} from './robots'
import CardList from './CardList/CardList';

ReactDOM.render(
  <div>
    <CardList robots={robots}/>
  </div>
  ,
  document.getElementById('root')
);
