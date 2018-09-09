import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import SideBar from "./sidebar";
import Intro from "./intro";
import About from "./about";
import Opensource from "./opensource";
import Contact from "./contact";

//import Example from "./example";
//import logo from '../logo.svg';

import '../css/global.css';
import '../css/App.css';

class App extends Component {
    constructor(){
        super();
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
          <SideBar/>
          <Intro/>
          <About/>
          <Opensource/>
          <Contact/>
      </div>
    );
  }
}

export default App;