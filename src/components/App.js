import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import SideBar from "./sidebar"
import Home from "./home"
import Story from "./story"
import Github from "./github"
// import Help from "./help"

import '../css/global.css';
import '../css/App.css';

class App extends Component {
    constructor(){
        super();
          this.state = {
            results: {}
        };
    }
  render() {
    return (
        <Router>
        <div className="App">
            <SideBar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Story}/>
            <Route exact path="/open-source" component={Github}/>
            {/*<Route exact path="/volunteer" component={Help}/>*/}
        </div>
        </Router>
    );
  }
}

export default App;
