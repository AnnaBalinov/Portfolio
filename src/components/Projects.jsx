import { Component } from 'react'
import { projectService } from '../services/project-service.js'

export class Projects extends Component {

    state = {
        slideIndex: 0,
        projects: null,
    }

    componentDidMount() {
        this.getProjects()
    }

    async getProjects() {
        const projects = await projectService.query()
        this.setState({ projects: projects["my-projects"] })
    }

    // Next/previous controls
    moveSlides = (n) => {
        const { slideIndex } = this.state
        let i = slideIndex + n
        if (i > 2) i = 0
        if (i < 0) i = 2
        this.setState({ slideIndex: i })
    }

    // Thumbnail image controls
    currentSlide = (n) => {
        this.setState({ slideIndex: n })
    }

    render() {
        const { slideIndex, projects } = this.state

        if (!projects) return <div>Loading...</div>

        const currProject = projects[slideIndex]

        let slide =
            <div className="projects-slideshow fade">
                <div className="project-info-1">
                    <div>
                        <h2 className="title">
                            {currProject["name"]}
                        </h2>
                        <div className="description">
                            {currProject["description"]}
                        </div>
                    </div>


                    <div className="technologies">
                        <h2>Technologies</h2>
                        <ul>
                            {currProject["technologies"].map(tec =>
                                <li key={tec}>{tec}</li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="project-info-2">
                    <div className="img-container">
                        <img src={require('../assets/imgs/' + currProject["img-title"])} alt="tasko web" />
                    </div>

                    <div className="Links">
                        <a target="_blank" rel="noreferrer" href={currProject["Links"]["website"]} title="Website">
                            Website <i className="fa fa-laptop"></i></a>
                        <a target="_blank" rel="noreferrer" href={currProject["Links"]["github"]} title="Github">
                            Github <i className="fa fa-github"></i></a>
                    </div>
                </div>
            </div>

        return (
            <section className="main-section projects-cmp">
                <div className="projects-container">
                    <div className="p-d-container">
                        <span className="prev" onClick={() => this.moveSlides(-1)}>&#10094;</span>
                        {slide}
                        <span className="next" onClick={() => this.moveSlides(1)}>&#10095;</span>
                    </div>
                    <div className="dots-container">
                        <span className={slideIndex === 0 ? 'dot active' : 'dot'}
                            onClick={() => this.currentSlide(0)}>
                        </span>
                        <span className={slideIndex === 1 ? 'dot active' : 'dot'}
                            onClick={() => this.currentSlide(1)}>
                        </span>
                        <span className={slideIndex === 2 ? 'dot active' : 'dot'}
                            onClick={() => this.currentSlide(2)}>
                        </span>
                    </div>
                </div>
            </section>
        )
    }
}