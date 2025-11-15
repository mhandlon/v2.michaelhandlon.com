import React from 'react'
import {Container, Row, Col} from 'reactstrap'

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
                            <Col xs={{size: 10, offset: 1}}>
                                <figure className="portrait">
                                    <img src={headshot} alt={"Michael Handlon"}></img>
                                    <p>Rare photographic evidence that I exist</p>
                                    <br/>
                                </figure>
                                <p>Hello - I’m <a href={"https://x.com/mhandlon"}>Michael Handlon</a>. I’ve been
                                    building software <a href={"https://www.linkedin.com/in/mhandlon/"}>since 2005</a>.
                                </p>
                                <p>I'm currently a Software Engineer at <a
                                    href={"https://www.activecampaign.com"}>ActiveCampaign</a>.
                                    I'm working on updating their internal billing systems to support the new <a
                                        href={"https://www.activecampaign.com"}>ActiveCampaign</a> <a
                                        href={"https://www.activecampaign.com/pricing"}>cloud pricing model</a>.
                                    Which is a complex system with a lot of microservices. Here we use a lot of
                                    different
                                    technologies but here are some of the main ones I've been working with recently. <a
                                        href={"https://www.php.net"}>PHP</a> with a <a
                                        href={"https://www.mysql.com"}>MySQL</a> database for the backend tool that acts
                                    as a central hub for our billing engine. Then unit testing the work with <a
                                        href={"https://phpunit.de"}>PHPUnit</a>. <a
                                        href={"https://www.javascript.com"}>JavaScript</a> with <a
                                        href={"https://react.dev/"}>React</a> for the frontend. <a
                                        href={"https://www.python.org"}>Python</a> for our billing microservices. <a
                                        href={"https://go.dev/"}>Go</a> for CLI tools used in syncing developer tools
                                    & environments. <a href={"https://java.com"}>Java</a> for some other core billing
                                    and tax applications. <a href={"https://aws.amazon.com"}>AWS</a> for our cloud
                                    services with <a
                                        href={"https://aws.amazon.com/dynamodb"}>DynamoDB</a> for noSQL database
                                    services. <a href={"https://www.docker.com/"}>Docker</a> for synchronous development
                                    environments & testing. <a href={"https://newrelic.com"}>New Relic</a> for
                                    monitoring servers & production/staging application
                                    performance. <a href={"https://www.datadoghq.com/"}>Datadog</a> for application
                                    logging.
                                </p>

                                <p>Before this I was a Lead Software Engineer at <a href={"https://www.coxautoinc.com"}>Cox
                                    Automotive</a>. Working on a legacy software modernization project. The focused
                                    of this role was the application Alfred, a monolithic application, that was being
                                    modernized and brought to up to current standards.
                                    Alfred was built using <a href={"https://www.php.net"}>PHP</a> & <a
                                        href={"https://www.javascript.com"}>JavaScript</a> w/ <a
                                        href={"https://jquery.com"}>jQuery</a>. It was used for tracking of electric
                                    vehicle battery repairs, billing and reporting.
                                    The technical debt was mitigated by implementing unit tests via <a
                                        href={"https://phpunit.de"}>PHPUnit</a>, monitoring servers and logging using <a
                                        href={"https://newrelic.com"}>New Relic</a> & refactoring the codebase to use <a
                                        href={"https://www.php-fig.org/psr/psr-12/"}>PSR-12</a> coding standards.
                                    As well as continuing to update the application with new features and bug fixes.
                                    The DevOps consist of <a href={"https://www.docker.com/"}>Docker</a> for local
                                    development, <a href={"https://newrelic.com"}>New Relic</a> for monitoring/logging, <a
                                        href={"https://github.com/enterprise"}>Git Enterprise</a> for source control & <a
                                        href={"https://aws.amazon.com"}>Amazon Web Services</a> for hosting.
                                </p>

                                <p>As a <a href={"https://www.php.net/"}>PHP</a> developer at the <a
                                    href={"https://www.nsls.org"}>National Society of Leadership & Success</a>.
                                    We were updating and revamping the core software that will help empower today &
                                    tomorrow's leaders to upskill the world!
                                    They were using <a href={"http://www.php.net"}>PHP</a> w/ <a
                                        href={"https://symfony.com/"}>Symfony</a>, <a
                                        href={"https://phpunit.de"}>PHPUnit</a> & <a
                                        href={"https://www.drupal.org"}>Drupal</a>.
                                    Then on the front end ended up using <a
                                        href={"https://www.javascript.com"}>JavaScript</a> & <a
                                        href={"https://reactjs.org/"}>React</a>.
                                    The DevOps consist of <a href={"https://www.docker.com/"}>Docker</a> for
                                    development, <a href={"https://newrelic.com"}>New Relic</a> more monitoring and
                                    analysis, <a href={"https://github.com"}>GitHub</a> for source control,
                                    & <a href={"https://aws.amazon.com"}>Amazon Web Services</a> for hosting.
                                </p>

                                <p>Around the start of the pandemic I made a move to <a
                                    href={"https://www.sonnysdirect.com/"}>Sonny's Enterprises</a> working on the
                                    development of cloud-based SaaS web solutions for 300+ carwash companies.
                                    Working with a diverse tech stack that included <a
                                        href={"http://www.php.net"}>PHP</a>, <a
                                        href={"https://symfony.com/"}>Symfony</a>, <a
                                        href={"https://www.javascript.com"}>JavaScript</a>, <a
                                        href={"https://jquery.com/"}>jQuery</a>, <a
                                        href={"https://getbootstrap.com/"}>Bootstrap</a>, <a
                                        href={"https://www.python.org/"}>Python</a>, <a
                                        href={"https://java.com"}>Java</a> & <a
                                        href={"https://go.dev/"}>Go</a>.
                                </p>

                                <p>After moving to Miami in 2018 I found employment as a software engineer with <a
                                    href={"https://www.converlogic.com"}>
                                    Converlogic</a>. Where I was working to bring telecommunication & mobile banking
                                    services
                                    to the people of Sudan. We're using a tech stack that includes <a
                                        href={"https://www.php.net"}>PHP</a>, <a
                                        href={"https://www.javascript.com"}>JavaScript</a>, <a
                                        href={"https://symfony.com"}>Symfony</a>, <a
                                        href={"https://isocpp.org"}>C++</a> & <a href={"https://java.com"}>Java</a>.
                                </p>

                                <p>Before that, I’d been using my powers to help with the digitization of print media
                                    at <a href={"http://www.crl.edu"}>The Center for Research Libraries</a>. Where there
                                    was a focus on <a href={"https://www.php.net"}>PHP</a>, <a
                                        href={"https://symfony.com"}>Symfony</a>, <a
                                        href={"https://www.python.org"}>Python</a>, <a
                                        href={"https://www.javascript.com"}>Javascript</a>, <a
                                        href={"https://reactjs.org"}>React</a>, <a
                                        href={"https://www.drupal.org"}>Drupal</a>, <a
                                        href={"https://www.adobe.com/products/coldfusion-family.html"}>ColdFusion</a> & <a
                                        href={"https://aws.amazon.com"}>Amazon Web Services</a>.</p>

                                <p>Form 2014 to 2016 I was helping <a href={"http://www.premierfarnell.com"}>Premier
                                    Farnell</a> corner the development tool marketplace. I contributed a good amount
                                    of <a
                                        href={"https://www.php.net"}>PHP</a>, <a
                                        href={"https://www.javascript.com"}>JavaScript</a>, & <a
                                        href={"https://java.com"}>Java</a> & helped bring the <a
                                        href={"https://www.element14.com"}>Element14 Community</a> to the next level. I
                                    was part
                                    of a talented team & I grew a lot while working on some challenging projects.</p>

                                <p>I did contract development & working for small to mid sized companies from 2007-2013
                                    throughout the Chicagoland area. This
                                    was a chance for me to earn my chops by working with different teams, technologies,
                                    methodologies, platforms, & design patterns. Which included work with:<br/>
                                </p>

                                <ul>
                                    <li><a href={"https://www.php.net"}>PHP</a>
                                        <ul>
                                            <li><a href={"https://www.symfony.com"}>Symfony</a></li>
                                            <li><a href={"https://laravel.com"}>Laravel</a></li>
                                            <li><a href={"https://www.yiiframework.com"}>Yii</a></li>
                                            <li><a href={"https://www.zend.com"}>Zend</a></li>
                                            <li><a href={"https://wordpress.com"}>WordPress</a></li>
                                            <li><a href={"https://www.oscommerce.com"}>osCommerce</a></li>
                                            <li><a
                                                href={"https://business.adobe.com/products/commerce/magento/open-source.html"}>Magento</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href={"https://www.javascript.com"}>JavaScript</a>
                                        <ul>
                                            <li><a href={"https://jquery.com"}>jQuery</a></li>
                                            <li><a
                                                href={"https://getbootstrap.com/"}>Bootstrap</a></li>
                                        </ul>
                                    </li>
                                    <li><a href={"https://isocpp.org"}>C++</a></li>
                                    <li><a href={"https://java.com"}>Java</a></li>
                                    <li><a href={"https://www.salesforce.com"}>Salesforce</a></li>
                                    <li><a href={"https://www.adobe.com/products/coldfusion-family.html"}>ColdFusion</a>
                                    </li>
                                    <li><a href={"https://aws.amazon.com"}>AWS</a></li>
                                    <li><a href={"https://www.newrelic.com"}>New Relic</a></li>
                                </ul>

                                <p>I graduated from <a href={"http://www.niu.edu"}>Northern Illinois University</a> in
                                    2005
                                    with a Bachelor of Science degree in <a href={"http://www.cs.niu.edu"}>Computer
                                        Science</a>. After I worked as a developer at <a
                                        href={"http://sgcaptrading.com"}>
                                        SG Cap Trading</a> working on black box trading applicatons.</p>

                                <p>In my remaining time I’m actively involved in the <a
                                    href={"https://www.2600.com"}>#2600</a> <a
                                    href={"https://www.2600.com/meetings/mtg.html"}>community</a>, contributing to <a
                                    href={"https://github.com/mhandlon"}>open source projects</a>, going to conferences,
                                    reading, & staying active.</p>

                                <p>My personal projects are typically composed of one or more of these frameworks,
                                    tools, & technologies:</p>
                                <ul>
                                    <li><a href={"https://www.php.net"}>PHP</a> - a server side programming language.
                                        <ul>
                                            <li><a href={"https://www.symfony.com"}>Symfony</a> or <a
                                                href={"https://laravel.com"}>Laravel</a> - open source PHP frameworks.
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href={"https://www.javascript.com"}>Javascript</a> - a client side
                                        programming language.
                                        <ul>
                                            <li><a href={"https://reactjs.org"}>React</a> or <a
                                                href={"https://vuejs.org"}>VueJS</a>- Sorry, <a
                                                href={"https://angularjs.org"}>Angular</a> - popular JavaScript
                                                frameworks.
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href={"https://go.dev/"}>Go</a> - an open-source programming language
                                        developed at <a href={"https://www.google.com"}>Google</a>. It's known for its
                                        strong support for concurrency, fast compilation, and high performance, making
                                        it popular for cloud services, web development, and large-scale applications.
                                    </li>
                                    <li><a href={"https://www.python.org"}>Python</a> - a versatile, high-level, and
                                        beginner-friendly programming language used for everything from web development
                                        and data analysis to automation and artificial intelligence.
                                    </li>
                                    <li><a href={"https://java.com"}>Java</a> - a modern, statically typed,
                                        general-purpose programming language developed by <a
                                            href={"https://www.jetbrains.com"}>JetBrains</a> that is concise, safe, and
                                        fully interoperable with Java.
                                        <ul>
                                            <li><a href={"https://spring.io"}>Spring</a> - an open-source application
                                                framework for the Java platform, designed to simplify the development of
                                                enterprise-level applications.
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href={"https://isocpp.org"}>C++</a> - a powerful, general-purpose, and
                                        high-performance programming language that supports object-oriented, procedural,
                                        and generic programming.
                                    </li>
                                    <li><a href={"https://developer.apple.com/swift"}>Swift</a> - a powerful and
                                        intuitive programming language developed by <a
                                            href={"https://www.apple.com"}>Apple</a> for building applications across
                                        its ecosystem.
                                    </li>
                                    <li><a href={"https://kotlinlang.org/"}>Kotlin</a> - a modern, statically-typed
                                        programming language that runs on the <a
                                            href={"https://java.com"}>Java</a> Virtual Machine (JVM) and is designed to
                                        interoperate with <a href={"https://java.com"}>Java</a> code.
                                    </li>
                                    <li><a href={"https://github.com/features/actions"}>Github Actions</a> or <a
                                        href={"https://jenkins.io"}>Jenkins</a> - powerful continuous integration and
                                        delivery.
                                    </li>
                                    <li><a href={"https://aws.amazon.com"}>Amazon Web Services</a> - a comprehensive and
                                        broadly adopted cloud computing platform from <a
                                            href={"https://www.amazon.com"}>Amazon</a>.
                                    </li>
                                    <li><a href={"https://www.docker.com/"}>Docker</a> - is an open platform that
                                        enables developers to build, ship, and run applications within isolated
                                        container environments.
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
