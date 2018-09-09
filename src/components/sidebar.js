import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Container, Row, Col } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faNewspaper,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/sidebar.css'
//import '../css/fontawesome-all.css';

library.add(
    faHome,
    faNewspaper,
    fab,
    faEnvelope,
);

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/"><FontAwesomeIcon icon="home" /> <span class="menu-text">Home</span></a>
            <a className="menu-item" href="/about"><FontAwesomeIcon icon="newspaper" /> <span className="menu-text">About</span></a>
            <a className="menu-item" href="/open-source"><FontAwesomeIcon icon={['fab', 'github']} /> <span className="menu-text">Open Source</span></a>
            <a className="menu-item" href="/contact"><FontAwesomeIcon icon="envelope" /> <span className="menu-text">Contact</span></a>
        </Menu>
    );
};