import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../css/opensource.css'

export default class Opensource extends React.Component {
    render() {
        return (
            <section id="opensource">
                <Container className="text-center">
                    <div className="oss-love">
                        <h2>I &hearts; open source!</h2>
                        <p>I love giving back.</p>
                        <a href="/open-source.html" className="btn btn-default btn-xl wow tada">Open source
                            projects</a>
                    </div>
                </Container>
            </section>
        );
    }
}