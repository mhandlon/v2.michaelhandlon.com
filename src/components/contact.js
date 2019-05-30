import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import WOW from "wowjs";

import '../css/fontawesome-all.css';
import '../css/contact.css'

export default class Contact extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    render() {
        return (
            <section id="contact">
                <Container>
                    <Row>
                        <Col lg="2"></Col>
                        <Col lg="8" className="text-center">
                            <h2 className="contact">Let's Get In Touch!</h2>
                            <hr className="contact"/>
                                <p>Ready to start your next project with me? Curious what I am up to? Have a food, film,
                                    or music recommendation?</p>
                        </Col>
                    </Row>
                    <Row id="cicons">
                        <Col lg="4" className="text-center">
                            <a href="https://twitter.com/mhandlon">
                                <i className="fab fa-twitter fa-3x wow bounceIn" data-wow-delay=".1s"></i>
                                <p>mhandlon</p>
                            </a>
                        </Col>
                        <Col lg="4" className="text-center">
                            <a href="https://github.com/mhandlon">
                                <i className="fab fa-github fa-3x wow bounceIn" data-wow-delay=".1s"></i>
                                <p>mhandlon</p>
                            </a>
                        </Col>
                        <Col lg="4" className="text-center">
                            <a href="mailto:micahel.handlon@gmail.com">
                                <i className="far fa-envelope fa-3x wow bounceIn" data-wow-delay=".1s"></i>
                                <p>micahel.handlon@gmail.com</p>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <p className="text-center copyright">© 2014-2019 Michael Handlon</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
