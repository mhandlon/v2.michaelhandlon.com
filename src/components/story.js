import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Storyhead from './storyhead';
import StoryContent from './storycontent'
import Contact from "./contact";

export default class Story extends React.Component {
    render() {
        return (
            <div>
            <Storyhead/>
            <StoryContent/>
                <Contact/>
            </div>
        );
    }
}