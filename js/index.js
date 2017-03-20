require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
   ReactDOM.render(<Board title={"The Board"} lists={["List 1", "List 2", "List 3"]} />, document.getElementById('app'))
);