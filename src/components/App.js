import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import SideBar from "./sidebar";
//import Example from "./example";
//import logo from '../logo.svg';

import '../css/global.css';
import '../css/App.css';
import '../css/fontawesome-all.css';

class App extends Component {
    constructor(){
        super();
        //document.write(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.");
        this.state = {
            results: {}
        };
        console.log(this.state.results);
    }
  render() {
        /*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         */
    return (
      <div className="App">
          <SideBar />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;