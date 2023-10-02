
import { Link } from "react-router-dom"
import "./ProjectSpecs.scss"

function ProjectSpecs({ role, tech, month, year, linkGithub }) {

    return (
        <>
        <div>
            <h3>role</h3>
            <p>{role}</p>
        </div>

        <div>
            <h3>tech</h3>
            <p>{tech}</p>
        </div>

        <div>
            <h3>date</h3>
            <p>{month} {year}</p>
        </div>

        <div>
            <p>Check this project on <Link to={linkGithub} target="_blank">Github.</Link></p>
        </div>
        </>
    )
}

export default ProjectSpecs