import React from 'react'
import Layout from '@theme/Layout'
import clsx from 'clsx';
import styles from './styles.module.css';
import CircularEnclose from '../components/CircularEnclose'


const About = () => {
    return (
        <Layout title="About">
            <div className={clsx("twoColumnWrapper")} >
                <div className="card">
                    <div className="card__image">
                        <img src='./../static/img/mrs_mcquaries_chair_sydney_australia.jpg' title="Me at McQuaries" alt="Photo of Adam Kecskes in Australia" />
                    </div>
                    <div class="card__body">
                        <small>My last name is pronounced 'kes-kes.' The 'c' is silent for good luck. 🍀</small>
                    </div>
                </div>
                <div className="paper">
                    <p>Hi! I'm Adam Kecskes, and I've done a lot to help companies thrive over the 20 years of my career in technology. Here's how I consider myself; I'm a(n):</p>
                    <ul>
                        <li>
                            <h2>Information Architect</h2>
                        </li>
                        <li>
                            <h2>Project Orchestrator</h2>
                        </li>
                        <li>
                            <h2>Operational Optimizer</h2>
                        </li>
                        <li>
                            <h2>Advocate for Customers, Clients, and Workers</h2>
                        </li>
                    </ul>
                </div>
                <div className="paper">
                    <h2>I Ask a Lot of Questions</h2>
                    <p>
                        I'm a troubleshooter; instead of putting up with the status quo, I'm
                        always asking, 'What improvements can we make to make our efforts a
                        little easier?
      </p>
                    <p>
                        I also maintain a customer-centric worldview. The question I ask myself
                        is, "Which solutions benefit the most of us, and still respect all of
                        us?"
      </p>
                    <p>
                        As such, I've moved up to Director and VP positions at various companies
                        because that is where I can provide the greatest level of service.
                        However, I'm not afraid to dig into code, databases, or documentation
                        when necessary. Often times it's looking into the details that reveal
                        issues &mdash; and solutions &mdash; which will best impact the entire
                        organization.
      </p>
                </div>
                <CircularEnclose image="./../static/img/computer.png" alt="Computer Icon" />
                <CircularEnclose image="./../static/img/flow.png" alt="Flow Icon" />
                <div className="paper">
                    <h2>I Can Fill Many Roles</h2>
                    <p>
                        I've worked for 3 large cap companies and 3 startup companies all at
                        various stages of maturity,&nbsp;&nbsp;giving me a broad scope of
                        business opportunities to learn from.
        </p>
                    <p>Some of the domains I've worked in:</p>
                </div>
                <div className="paper">
                    <h2>We Are Better Together</h2>
                    <p>
                        The best teams I’ve lead or worked for have been the ones where we had
                        mutual respect for one another and engaged in our work with transparency
                        and humility.
      </p>
                    <p>
                        In teams that I manage, I rely heavily on the expertise and
                        fact-oriented opinions of each person to make better overall decisions.
                        I distinctly enjoy learning about the innovative solutions that my teams
                        come up with.
      </p>
                    <p>
                        And when it comes to leadership, I stick to principles that respect each
                        person; you don't know why they did X, Y, or Z unless you ask them.
                        Principles such as:
      </p>
                    <ul>
                        <li key='1'>Transparency &amp; Honesty</li>
                        <li key='2'>Safety both in the environment and in failure</li>
                        <li key='3'>
                            Recognize leadership and provide opportunities for improvement
        </li>
                    </ul>
                </div>
                <CircularEnclose image="./../static/img/teamwork.png" alt="Teamwork Icon" />
            </div>
        </Layout>
    )
};

export default About;