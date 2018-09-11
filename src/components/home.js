import React, { Component } from 'react';

import Intro from "./intro";
import About from "./about";
import Opensource from "./opensource";
import Contact from "./contact";

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Intro/>
                <About/>
                <Opensource/>
                <Contact/>
            </div>
        );
    }
}