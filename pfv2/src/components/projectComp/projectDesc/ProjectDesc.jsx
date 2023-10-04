import ButtonPrimary from "../../buttons/ButtonPrimary"

import "./ProjectDesc.scss"




function ProjectDesc({ projectName, projectURL, projectDescription, projectImg }) {


    return (
        <>
            <section className="project-desc">
                <div className="project-desc__top">
                    <h1 className="text-color-blue h2 vertical-trim-line-height">{projectName}</h1>
                    <ButtonPrimary className="text-color-green svg-color-green" to={projectURL} text="Visit Website" openInNewTab={true} />
                </div>
                <div className="project-desc__bottom">
                    <p className="project-desc__bottom__p">{projectDescription}</p>
                    <img className="project-desc__bottom__img" src={projectImg} alt="" />
                </div>
            </section>

        </>
    )

}

export default ProjectDesc

