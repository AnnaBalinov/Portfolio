import { Component } from 'react'
import { Link } from 'react-scroll'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { ContactMe } from '../components/ContactMe'
import { Home } from '../components/Home'

export class HomePage extends Component {

    render() {

        return (
            <section className="home-page">

                <header className="nav-wrapper app-header">
                    <section className="header-container">
                        <span className="logo">
                            <Link activeClass="active" smooth spy to="home">
                                Anna Balinov
                            </Link>
                        </span>
                        <span className="small-logo">
                            <Link activeClass="active" smooth spy to="home">
                                AB
                            </Link>
                        </span>

                        <nav className="nav-bar">
                            <span>
                                <Link className="link" activeClass="active" smooth spy to="projects">
                                    PROJECTS
                                </Link>
                            </span>
                            <span>
                                <Link className="link" activeClass="active" smooth spy to="about">
                                    ABOUT
                                </Link>
                            </span>
                            <span>
                                <Link className="link" activeClass="active" smooth spy to="contact">
                                    CONTACT
                                </Link>
                            </span>
                        </nav>

                    </section>
                </header>


                <section id="home" className="home">
                    <Home />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="contact">
                    <ContactMe />
                </section>

            </section>
        )
    }
}

