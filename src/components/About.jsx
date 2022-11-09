import { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <section className="main-section about-cmp">
                <div className="about-container">

                    <div className="my-img">
                        <img src={require('../assets/imgs/me.png')} alt="anna" />
                    </div>

                    <div className="description">
                        <div className="about-me">
                            <h2>About me</h2>
                            <article>
                                Hi! I'm Anna Balinov, a Full-Stack Web Developer based in Ramat-Gan, IL.
                                Graduate of the Coding Academy - An intensive coding bootcamp that qualifies Full Stack developers.
                                I have knowledge and experience in writing single-page applications
                                and working with the latest technologies such as React.js, VUE, Node.js, etc.
                                I am creative and have an eye for design,
                                and I enjoy combining this with my development work.
                            </article>
                        </div>

                        <div className="skills">
                            <h2>My skills</h2>
                            <ul>
                                <li>HTML</li>
                                <li>Javascript</li>
                                <li>CSS</li>
                                <li>Sass</li>
                                <li>React</li>
                                <li>VUE</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>Git</li>
                            </ul>
                        </div>

                        <div className="resume">
                            <a href={require('../assets/files/anna-balinov-cv.pdf')} download="">
                                Download Resume</a>
                            <div className="social-links">
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anna-balinov" className="social-icon">
                                    <i className="fa fa-linkedin"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/annabalinov" className="social-icon">
                                    <i className="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        )
    }
}
