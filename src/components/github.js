import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../css/github.css'

export default class Gitrub extends React.Component {
    render() {
        return (
            <section className="inner" >
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1>The Github So Far</h1>
                    </div>
                </div>
            </section>
        );
    }
}