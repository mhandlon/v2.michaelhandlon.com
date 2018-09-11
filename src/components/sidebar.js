import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faNewspaper,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/sidebar.css'

library.add(
    faHome,
    faNewspaper,
    fab,
    faEnvelope,
);

export default props => {
    return (
        <Menu>
            <Link to='/'><FontAwesomeIcon icon="home" /><span class="menu-text">Home</span></Link>
            <Link to='/about'><FontAwesomeIcon icon="newspaper" /><span className="menu-text">About</span></Link>
            <Link to="/open-source"><FontAwesomeIcon icon={['fab', 'github']} /> <span className="menu-text">Open Source</span></Link>
            <a className="menu-item" href="#contact"><FontAwesomeIcon icon="envelope" /> <span className="menu-text">Contact</span></a>
        </Menu>
    );
};