import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../css/storyhead.css'

export default class Storyhead extends React.Component {
    render() {
        return (
            <section className="inner">
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1>The Story So Far</h1>
                    </div>
                </div>
            </section>
        );
    }
}