import { Link } from "react-router-dom";
import ButtonPrimary from "../buttons/ButtonPrimary";

import './ProjectBlock.scss'


function ProjectBlock({ slug, projectName, role, year, projectSummary }) {

    const projectSlug = `/projects/${slug}`;


    return (
        <>
            <div className="project-block">

                <h2 className="vertical-trim-line-height"><Link to={projectSlug}>{projectName}</Link></h2>
                <h3 className="project-block__tech">{role}&nbsp;{year}</h3>
                <p className="project-block__desc ">{projectSummary}</p>
                <ButtonPrimary className="project-block__btn" to={projectSlug} text="View project"/>

            </div>
        </>
    )
}

export default ProjectBlock;