import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../css/github.css'
import Contact from "./contact";

export default class Github extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<");

        /*
         .then( console.log( response => response.json()) )
                .then(
                    console.log(response)
                    //console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzz")
                )
        */
        console.log(
            fetch(`https://api.github.com/users/mhandlon`)
        )
    }

    render() {
        return (
            <div>
            <section id="github" className="inner">
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1>Open Source</h1>
                    </div>
                </div>
            </section>
            <aside className="bg-dark">
                <Container>
                    <div className="call-to-action text-center">
                        <h2>My eyes and ears are open.</h2>
                        <p>I am on the lookout for more open source projects and opportunities. If you've got one,
                            let's talk!</p>
                    </div>
                </Container>
            </aside>
            <Contact />
            </div>
        );
    }
}