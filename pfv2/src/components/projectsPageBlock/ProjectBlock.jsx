import React from "react";
import { Link } from "react-router-dom";

import './ProjectBlock.scss'

const ButtonPrimary = React.lazy(() => import ("../buttons/ButtonPrimary"));

function ProjectBlock({ slug, projectName, role, year, projectSummary, tag }) {

    const projectSlug = `/projects/${slug}`;


    return (
        <>
            <div className="project-block">

                <h2 className="project-block__title vertical-trim-line-height">
                    <Link to={projectSlug}>
                        {projectName}
                    </Link>
                </h2>
                <div className="project-block__info">
                    <h3 className="project-block__info__tech">{role}&emsp;{year}</h3>
                    <p className="project-block__info__desc">{projectSummary}</p>
                    {tag && (
                        <p className="project-block__info__tag">{tag}</p>
                    )}
                    <ButtonPrimary className="project-block__info__btn" to={slug} text="View project"/>
                </div>
                
            </div>
        </>
    )
}

export default ProjectBlock;