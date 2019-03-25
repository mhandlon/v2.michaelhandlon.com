import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../css/github.css'
import Contact from "./contact";

export default class Github extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        //console.log(React.version);
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/mhandlon`)
            .then(response => response.json())
            .then(
                user => {
                    // How can we use `this` inside a callback without binding it??
                    // Make sure you understand this fundamental difference with arrow functions!!!
                    this.setState({
                        user: user
                    });
                }
            );
        fetch('https://api.github.com/users/mhandlon/repos')
            .then(response => response.json())
            .then(
                repos => {
                    this.setState({
                        repos: repos
                    });
                }
            );
    }

    render() {

        if (!this.state.user || !this.state.repos) {
            return (<div className="user-page">LOADING...</div>);
        }

        const user = this.state.user;
        //console.log(user);
        const repos = this.state.repos;
        console.log("repos");
        console.log(repos);

        var myrepos = repos.map(repos =>
                <Container className="myrepo-cont">
                    <Row className="myrepo">
                        <a className="repolink" href={repos.html_url}>
                            <i class="repoicon fab fa-github fa-3x float-left"></i>
                            <h1 class="repo-name float-left">{repos.name}</h1>
                        </a>
                    </Row>
                    <p className="repo-desc text-center">{repos.description}</p>
                </Container>
            );

        return (
            <div>
            <section id="github" className="inner">
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1>Open Source</h1>
                    </div>
                </div>
            </section>
            <Container>
                <Row className="myrepos-header">
                    <Col xs="12 ">
                        <p className="text-center">If you get to know me, you'll learn that I love open source software; <a href="https://github.com/mhandlon">contributing</a> and consuming.<br />I've curated the following list of {user.public_repos} open source projects.</p>
                    </Col>
                </Row>
            </Container>
                {myrepos}
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
