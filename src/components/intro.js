import React from 'react';
//import { Container, Row, Col } from 'reactstrap';

import '../css/intro.css'

export default class Intro extends React.Component {
    render() {
        return (
            <section id="intro">
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1>Hi! I'm Michael.</h1>
                        <hr className="hello" />
                            <p>Software Engineer and Open Source Enthusiast living in Miami, Fl.</p>
                            <br />
                            <a id="btn_about" href="#about" className="btn btn-primary btn-xl">More about me</a>
                    </div>
                </div>
            </section>
        );
    }
}
