import React from 'react'
import { Container, Row } from 'reactstrap'

export default class Repo extends React.Component {

    render() {

        var updated = new Date(this.props.updated_at);
        var created = new Date(this.props.created_at);

        return <Container className={"myrepo-cont"}>
            <Row className={"myrepo"}>
                <a href={this.props.html_url}>
                    <i className={"repoicon fab fa-github fa-3x float-left"}></i>
                    <h1 className={"repo-name float-left"}>{this.props.name}</h1>
                </a>
            </Row>
            <p className={"repo-desc text-center"}>{this.props.description}</p>
            <p className={"repo-date"}>{this.props.language} | updated: {updated.toLocaleString()} |
                created: {created.toLocaleString()}</p>
        </Container>;
    }
}
