import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router, Link,
    Route,
} from 'react-router-dom'

import SideBar from "./sidebar"
import Home from "./home"
import Story from "./story"
import Github from "./github"

import '../css/global.css';
import '../css/App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {slide as Menu} from "react-burger-menu";

class App extends Component {
    constructor(){
        super();
        this.state = {
            results: {}
        };
        console.log(this.state.results);
    }
  render() {
    return (
        <Router>
        <div className="App">
            <SideBar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Story}/>
            <Route exact path="/open-source" component={Github}/>
        </div>
        </Router>
    );
  }
}

export default App;