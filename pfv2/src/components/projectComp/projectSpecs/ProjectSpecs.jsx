
import { Link } from "react-router-dom"
import "./ProjectSpecs.scss"

function ProjectSpecs({ role, tech, month, year, linkGithub }) {

    return (
        <> 
            <section className="project-specs">
                <div className="project-specs__group">
                    <h3 className="project-specs__group__item project-specs__h3">role</h3>
                    <p className="project-specs__group__item project-specs__p">{role}</p>
                </div>

                <div className="project-specs__group">
                    <h3 className="project-specs__group__item project-specs__h3">tech</h3>
                    <p className="project-specs__group__item project-specs__p">{tech}</p>
                </div>

                <div className="project-specs__group">
                    <h3 className="project-specs__group__item project-specs__h3">date</h3>
                    <p className="project-specs__group__item project-specs__p">{month} {year}</p>
                </div>
            </section>
            <div className="project-specs-github">
                <p className="project-specs__p">Check this project on <Link className="project-specs-github__link" to={linkGithub} target="_blank">Github</Link>.</p>
            </div>
        </>
    )
}

export default ProjectSpecs