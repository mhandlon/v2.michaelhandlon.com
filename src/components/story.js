import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import '../css/sharred.css'
import '../css/story.css'

import Contact from "./contact"
import headshot from "../img/headshot.jpg"

export default class Story extends React.Component {
    render() {
        return (
            <div>
                <section id={"story"}
                         className={"inner"}>
                    <div className={"header-content"}>
                        <div className={"header-content-inner"}>
                            <h1>The Story So Far</h1>
                        </div>
                    </div>
                </section>
                <section id={"content"}>
                    <Container>
                        <Row>
                            <Col xs={{ size: 10, offset: 1 }}>
                                <figure className="portrait">
                                    <img src={headshot} alt={"Michael Handlon"}></img>
                                    <p>Rare photographic evidence that I exist</p>
                                    <br/>
                                </figure>

                                <p>Hello - I’m <a href={"http://twitter.com/mhandlon"}>Michael Handlon</a>. I’ve been building software <a href={"http://www.linkedin.com/in/mhandlon"}>since 2005</a>.</p>

                                <p>I'm currently a <a href={"https://www.php.net/"}>PHP</a> developer at the <a href={"https://www.nsls.org"}>National Society of Leadership & Success</a>.
                                    We're currently working on building software that will help empower today & tomorrow's leaders to upskill the world.
                                    To do this we're using <a href={"http://www.php.net"}>PHP</a> w/ <a href={"https://symfony.com/"}>Symfony</a> & <a href={"https://www.drupal.org"}>Drupal</a>.
                                    Then on the front end we're using <a href={"https://www.javascript.com"}>JavaScript</a> w/ <a href={"https://reactjs.org/"}>React</a>.
                                    The DevOps consist of <a href={"https://www.docker.com/"}>Docker</a> for development & <a href={"https://aws.amazon.com"}>Amazon Web Services</a> for hosting.
                                </p>

                                <p>Around the start of the pandemic I made a move to <a href={"https://www.sonnysdirect.com/"}>Sonny's Enterprises</a> working on the development of cloud-based SaaS web solutions for 300+ carwash companies.
                                    Working with a diverse tech stack that included <a href={"http://www.php.net"}>PHP</a>, <a href={"https://symfony.com/"}>Symfony</a>, <a href={"https://www.javascript.com"}>JavaScript</a>, <a href={"https://jquery.com/"}>jQuery</a>, <a href={"https://getbootstrap.com/"}>Bootstrap</a>, <a href={"https://www.python.org/"}>Python</a>, & <a href={"https://go.dev/"}>Go</a>.
                                </p>

                                <p>After moving to Miami in 2018 I found employment as a software engineer with <a href={"https://www.converlogic.com"}>
                                    Converlogic</a>. Where I was working to bring telecommunication & mobile banking services
                                    to the people of Sudan. We're using a tech stack that includes <a href={"https://www.php.net"}>PHP</a>, <a href={"https://www.javascript.com"}>JavaScript</a>, <a href={"https://symfony.com"}>Symfony</a>, <a href={"https://isocpp.org"}>C++</a> & <a href={"https://java.com"}>Java</a>.
                                </p>

                                <p>Before that, I’d been using my powers to help with the digitization of print media
                                    at <a href={"http://www.crl.edu"}>The Center for Research Libraries</a>.  Where there was
                                    a focus on <a href={"https://www.php.net/"}>PHP</a>, <a href={"https://www.python.org"}>Python</a>, <a
                                        href={"https://symfony.com"}>Symfony</a>, <a href={"https://www.drupal.org"}>Drupal</a>, & <a href={"https://aws.amazon.com"}>Amazon Web Services</a>.</p>

                                <p>For 2014 to 2016 I was helping <a href={"http://www.premierfarnell.com"}>Premier
                                    Farnell</a> corner the development tool marketplace. I contributed a good amount of <a
                                    href={"https://www.php.net"}>PHP</a> & <a
                                    href={"https://www.javascript.com"}>JavaScript</a> & helped bring the <a
                                    href={"https://www.element14.com"}>Element14 Community</a> to the next level. I was part
                                    of a talented team & I grew a lot while working on some challenging projects.</p>

                                <p>I spent the better part of 2013 working at <a href={"https://marineessentials.com"}>EOK
                                    Marketing</a>. Doing full stack web development & managing there <a
                                    href={"https://aws.amazon.com"}>AWS</a> servers. I completed a number of projects on a
                                    LAMP stack with <a href={"https://wordpress.com/"}>WordPress</a> & the <a href={"https://www.salesforce.com"}>Salesforce</a> platform.</p>

                                <p>Before joining the team at <a href="https://marineessentials.com/">EOK Marketing</a> I
                                    did contract web development from 2007-2013 throughout the Chicagoland area. This was a
                                    chance for me to earn my chops by working with different teams, technologies, methodologies,
                                    platforms, & design patterns.</p>

                                <p>I graduated from <a href={"http://www.niu.edu"}>Northern Illinois University</a> in 2005
                                    with a Bachelor of Science degree in <a href={"http://www.cs.niu.edu"}>Computer
                                        Science</a>. After I worked as a developer at <a href={"http://sgcaptrading.com"}>
                                        SG Cap Trading</a> working on black box trading applicatons.</p>

                                <p>In my remaining time I’m actively involved in the <a
                                    href={"https://www.2600.com"}>#2600</a> <a
                                    href={"https://www.2600.com/meetings/mtg.html"}>community</a>, contributing to <a
                                    href={"https://github.com/mhandlon"}>open source projects</a>, going to conferences,
                                    reading, & staying active.</p>

                                <p>My personal projects are typically composed of one or more of these frameworks, tools,
                                    & technologies:</p>
                                <ul>
                                    <li><a href={"http://www.php.net"}>PHP</a> - a server side programming language.</li>
                                    <li><a href={"https://www.symfony.com"}>Symfony</a> - an open source PHP framework.</li>
                                    <li><a href={"https://www.javascript.com"}>Javascript</a> - a client side programming language.</li>
                                    <li><a href={"https://reactjs.org"}>React</a> - Sorry, <a href={"https://angularjs.org"}>Angular</a> - a popular JavaScript framework.</li>
                                    <li><a href={"http://guides.rubyonrails.org"}>Ruby on Rails</a> - an open source Ruby framework.</li>
                                    <li><a href={"http://foundation.zurb.com"}>Foundation</a> &amp; <a
                                        href={"http://getbootstrap.com"}>Bootstrap</a> - frameworks to develop front-end code
                                        faster & better.
                                    </li>
                                    <li><a href={"https://www.python.org"}>Python</a> - an interpreted high-level programming
                                        language.
                                    </li>
                                    <li><a href={"https://go.dev/"}>Go</a> - a open source programming language from <a
                                        href={"https://www.google.com"}>Google</a>.
                                    </li>
                                    <li><a href={"https://isocpp.org"}>C++</a> - this is how I learned to code.</li>
                                    <li><a href={"https://java.com"}>Java</a> & <a href={"https://spring.io"}>Spring</a> - I've
                                        always had fun working with Java.
                                    </li>
                                    <li><a href={"https://jenkins.io"}>Jenkins</a> - continous intergration & delivery.
                                    </li>
                                    <li><a href={"https://aws.amazon.com"}>Amazon Web Services</a> - cloud hosting, built for
                                        developers.
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Contact/>
            </div>
        );
    }
}
