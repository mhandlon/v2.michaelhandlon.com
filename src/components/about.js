import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../css/about.css'

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container>
                    <Row>
                        <Col lg="2"></Col>
                        <Col lg="8" className="text-center">
                            <h2 className="about">I like to help.</h2>
                            <hr className="about"/>
                                <p className="about text-faded">I like to improve the software development process and write robust software. I love working with talented people, contributing to open source projects, and adding technical vision to strategic conversations.</p>
                                <a id="btn_story" href="/about" className="btn btn-default">The story so far</a>
                        </Col>
                    </Row>
                </Container>
            </section>
    );}
}
