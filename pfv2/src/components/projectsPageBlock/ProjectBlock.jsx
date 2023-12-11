import { Link } from "react-router-dom";
import ButtonPrimary from "../buttons/ButtonPrimary";

import './ProjectBlock.scss'


function ProjectBlock({ slug, projectName, role, year, projectSummary }) {

    const projectSlug = `/projects/dev/${slug}`;


    return (
        <>
            <div className="project-block">

                <h2 className="vertical-trim-line-height--soft">
                    <Link className="hover-effect" to={projectSlug}>
                        <div className="overflow-hidden position-relative hover-effect__inner" data-text={projectName}>
                            <div className="hover-effect__text">
                                {projectName}
                            </div>
                        </div>
                    </Link>
                </h2>
                <h3 className="project-block__tech">{role}&nbsp;{year}</h3>
                <p className="project-block__desc ">{projectSummary}</p>
                <ButtonPrimary className="project-block__btn" to={projectSlug} text="View project"/>

            </div>
        </>
    )
}

export default ProjectBlock;