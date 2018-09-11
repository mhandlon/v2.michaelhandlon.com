import React from 'react';
import Storyhead from './storyhead'

import { Container, Row, Col } from 'reactstrap';

import '../css/storymain.css'

export default class Storymain extends React.Component {
    render() {
        return (
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <figure className="portrait">
                                <img src="img/headshot.jpg" alt="Michael Handlon"></img>
                                <p>Rare photographic evidence that I exist</p>
                                <br/>
                            </figure>

                            <p>Hello - I’m <a href="http://twitter.com/mhandlon">Michael Handlon</a>. I’ve been building
                                software <a href="http://www.linkedin.com/in/mhandlon">since 2005</a>.</p>

                            <p>Most recently, I’ve been using my powers to help with the digitization of print media
                                at <a href="http://www.crl.edu/">The Center for Research Libraries</a>. Their technology
                                stack included <a href="http://www.php.net/">PHP</a>, <a
                                    href="https://www.python.org/">Python</a>, client-side <a
                                    href="https://www.javascript.com/">JavaScript</a>, <a
                                    href="https://symfony.com/">Symfony</a>, <a
                                    href="https://www.drupal.org/">Drupal</a>, and <a href="https://aws.amazon.com/">Amazon
                                    Web Services</a>.</p>

                            <p>After a helping <a href="http://www.crl.edu/">The Center for Research
                                Libraries</a> launch their new document delivery system, I’ve decided to pursue new
                                opportunities in south Florida. I want to focus on building elegant solutions to
                                difficult problems and writing code I’m proud to show my peers.</p>

                            <p>In my remaining time I’m actively involved in the <a
                                href="https://www.2600.com/">#2600</a> <a
                                href="https://www.2600.com/meetings/mtg.html">community</a>, contributing to <a
                                href="https://github.com/mhandlon">open source projects</a>, going to conferences,
                                reading, and staying active.</p>

                            <p>For 2014 to 2016 I was helping <a href="http://www.premierfarnell.com/">Premier
                                Farnell</a> corner the development tool marketplace. I contributed a good amount of <a
                                href="http://www.php.net/">PHP</a> and <a
                                href="https://www.javascript.com/">JavaScript</a> and helped bring the <a
                                href="https://www.element14.com">Element14 Community</a> to the next level. I was part
                                of a talented team and I grew a lot while working on some challenging projects.</p>

                            <p>I spent the better part of 2013 working at <a href="https://marineessentials.com/">EOK
                                Marketing</a>. Doing full stack web development and managing there <a
                                href="https://aws.amazon.com/">AWS</a> servers. I completed a number of projects on a
                                LAMP stack and the <a href="https://www.salesforce.com/">Salesforce</a> platform.</p>

                            <p>Before joining the team at <a href="https://marineessentials.com/">EOK Marketing</a> I
                                did contract web development from 2007-2013 throughout the Chicagoland area. This was a
                                chance for me to earn my chops by working with different teams, methodologies,
                                platforms, and design patterns.</p>

                            <p>I graduated from <a href="http://www.niu.edu/">Northern Illinois University</a> in 2005
                                with a Bachelor of Science degree in <a href="http://www.cs.niu.edu/">Computer
                                    Science</a>. I found myself working as a developer at <a
                                    href="http://sgcaptrading.com/">SG Cap Trading</a> working on black box trading
                                applicatons.</p>

                            <p>My personal projects are typically composed of one or more of these frameworks, tools,
                                and technologies:</p>
                            <ul>
                                <li><a href="https://symfony.com/">Symfony</a> - an open source PHP framework.</li>
                                <li><a href="http://guides.rubyonrails.org/">Ruby on Rails</a> - an open source Ruby
                                    framework.
                                </li>
                                <li><a href="https://angularjs.org">AngularJS</a> - a popular JavaScript framework.</li>
                                <li><a href="http://foundation.zurb.com/">Foundation</a> &amp; <a
                                    href="http://getbootstrap.com/">Bootstrap</a> - frameworks to develop front-end code
                                    faster and better.
                                </li>
                                <li><a href="https://golang.org/">Go</a> - a open source programming language from <a
                                    href="https://www.google.com/">Google</a>.
                                </li>
                                <li><a href="https://www.python.org/">Python</a> - an interpreted high-level programming
                                    language.
                                </li>
                                <li><a href="https://isocpp.org/">C++</a> - this is how I learned to code.</li>
                                <li><a href="https://java.com">Java</a> & <a href="https://spring.io/">Spring</a> - I've
                                    always had fun working with Java.
                                </li>
                                <li><a href="https://jenkins.io/">Jenkins</a> - continous intergration and delivery.
                                </li>
                                <li><a href="https://aws.amazon.com/">Amazon Web Services</a> - cloud hosting, built for
                                    developers.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}