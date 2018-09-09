import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../css/story.css'

export default class Story extends React.Component {
    render() {
        return (
            <section className="inner" style="background-image: url('/img/water.jpg');">
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1>The Story So Far</h1>
                    </div>
                </div>
            </section>
        );
    }
}