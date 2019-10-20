import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import '../css/github.css'
import Repo from "./repo";
import Contact from "./contact";

export default class Github extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/mhandlon`)
            .then(response => response.json())
            .then(
                user => {
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

    renderUserJSX() {

        var  publicRepoCnt = 0;

        if (this.state.user){
            const user = this.state.user;
            publicRepoCnt = user.public_repos;
        }

        return( <Container>
                    <Row className={"myrepos-header"}>
                        <Col xs={"12"}>
                            <p className={"text-center"}>If you get to know me, you'll learn that I love open source
                                software; <a href={"https://github.com/mhandlon"}>contributing</a> and consuming.<br/>I've
                                curated the following list of {publicRepoCnt} open source projects.</p>
                        </Col>
                    </Row>
                </Container>);
    }

    renderGithubJSX() {

        if (this.state.repos === undefined) {
            return (<div className={"loading"}>LOADING...</div>);
        }

        const repos = this.state.repos;
        var myrepos = repos.map(repo => {
            const repoProps = {
                html_url: repo.html_url,
                name: repo.name,
                description: repo.description,
                language: repo.language,
                updated_at: repo.updated_at,
                created_at: repo.created_at,
            };
            return(<Repo {...repoProps}/>);
        });
        return(<div>{myrepos}</div>);
    };

    render() {
        return (
            <div>
                <section id={"github"} className={"inner"}>
                    <div className={"header-content"}>
                        <div className={"header-content-inner"}>
                            <h1>Open Source</h1>
                        </div>
                    </div>
                </section>
                {this.renderUserJSX()}
                {this.renderGithubJSX()}
                <aside className={"bg-dark"}>
                    <Container>
                        <div className={"call-to-action text-center"}>
                            <h2>My eyes and ears are open.</h2>
                            <p>I am on the lookout for more open source projects and opportunities. If you've got one,
                                let's talk!</p>
                        </div>
                    </Container>
                </aside>
                <Contact/>
            </div>
        );
    }
}
