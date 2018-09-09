import React from 'react';
import ReactDOM from 'react-dom';

/*
const express = require('express');
const path = require('path');
const app = express();
*/

import './css/global.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();