import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../css/github.css'
import Contact from "./contact";

import GitHub from 'github-api';

/*
{this.state.data.map(el => (
    <li>
        {el.id}: {el.name}
    </li>
))}
*/

function addRepo() {
    console.log('myrepo');
}

export default class Github extends React.Component {

    constructor(props) {
        console.log('constructor');
        super(props);
        console.log(React.version);
        this.state = { data: []};
    }

    componentDidMount() {

        console.log('componentDidMount');

        var gh = new GitHub({
            username: 'mhandlon',
            password: 'Citizen4our'
            //token: 'MY_OAUTH_TOKEN'
        });

        const me = gh.getUser();
        me.listRepos()
            .then(
                repos => {
                    this.setState({
                        repos: repos
                    });
                    console.log('end');
                }
                /*
                function (response) {
                //console.log(response);
                this.setState({repos: response.data});
                */
            );
    }
                //res => this.setState({repos: res.data});
        ///};
            /*
            function(repos) {
            console.log("<<<<<<<<<<<<");
            console.log(repos.data);
            this.setState({ data: repos.data })
            */å

    /*
    createTable = () => {
        let table = [];
        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
            let children = [];
            //Inner loop to create children
            for (let j = 0; j < 5; j++) {
                children.push(<td>{`Column ${j + 1}`}</td>)
            }
            //Create the parent and add the children
            table.push(<tr>{children}</tr>);
        }
        return table;
    }
    */

    /*
    myGits = () => {
        var gh = new GitHub({
            username: 'mhandlon',
            password: 'Citizen4our'
        });
        const me = gh.getUser();
        let myrepos = me.listRepos().then(function(repos){
            //console.log(result['data']);
            var arrayOfRepos = [];
            repos['data'].forEach(function(element) {
                //console.log(element);
                //console.log(element.name);
                console.log(element);
                arrayOfRepos.push(<p>{element['deployments_url']}</p>);
                console.log(element['html_url']);
                console.log(element['name']);
                console.log(element['description']);
                console.log(element['language']);
            });
            console.log('arrayOfRepos');
            console.log(arrayOfRepos);
            return arrayOfRepos;
        });

        console.log("myrepos:");
        console.log(myrepos);
        return myrepos;
        //return repos;
    }
    */

    /*
    renderGits = async() => {
        try {
            var gh = new GitHub({
                username: 'mhandlon',
                password: 'Citizen4our'
                //token: 'MY_OAUTH_TOKEN'
            });
            const me = gh.getUser();
            let repos = me.listRepos();
            console.log('1');
            console.log(repos);

            let myrepos = me.listRepos().then(function(repos){
                //console.log(result['data']);
                var arrayOfRepos = [];
                arrayOfRepos.push(<p>XXXXXXXXXXXXXXXXXX</p>);
                repos['data'].forEach(function(element) {
                    //console.log(element);
                    //console.log(element.name);
                    //console.log(element);
                    arrayOfRepos.push(<p>XXXXXXXXXXXXXXXXXX{element['deployments_url']}</p>);
                    this.setState({
                        Gists: element.map((element, i) => (
                            <p>{element['name']}</p>
                        ))
                    });

                    //console.log(element['html_url']);
                    //console.log(element['name']);
                    //console.log(element['description']);
                    //console.log(element['language']);
                });


                //console.log('arrayOfRepos');
                //console.log(arrayOfRepos);
                return arrayOfRepos;
            });

            return myrepos;
            /*
            let res = await axios.get('/posts');
            let posts = res.data;
            // this will re render the view with new data
            this.setState({
                Posts: posts.map((post, i) => (
                    <li key={i} className="list-group-item">{post.text}</li>
                ))
            });
        } catch (err) {
            console.log(err);
        }
    }
        */
    /*
    componentDidMount() {
        console.log("mount");
        this.renderGits();
    }
    */
    /*
    componentDidMount() {
        fetch('https://example.com')
            .then((res) => res.json())
            .then((something) => this.setState({something}))
    }
    */

    render() {

        return (
            <div>
            <section id="github" className="inner">
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1>Open Source</h1>
                    </div>
                </div>
            </section>
            {this.state.data.map(el => (
                <p>
                    {el.id}: {el.name}
                </p>
            ))}
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
