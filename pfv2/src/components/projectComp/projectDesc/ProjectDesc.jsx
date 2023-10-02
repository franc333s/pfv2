import ButtonPrimary from "../../buttons/ButtonPrimary"

import "./ProjectDesc.scss"




function ProjectDesc({ projectName, projectURL, projectDescription, projectImg }) {


    return (
        <>
            <h1>{projectName}</h1>
            <ButtonPrimary to={projectURL} text="Visit Website" openInNewTab={true} />
            <p>{projectDescription}</p>
            <img src={projectImg} alt="" />

        </>
    )

}

export default ProjectDesc

