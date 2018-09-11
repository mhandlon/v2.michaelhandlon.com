import React from 'react';
import ReactDOM from 'react-dom';
/*
import { Route, Redirect } from 'react-router'

import {
    HashRouter
} from "react-router-dom";
*/

import './css/global.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
