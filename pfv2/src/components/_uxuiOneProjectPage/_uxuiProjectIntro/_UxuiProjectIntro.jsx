import ButtonPrimary from "../../buttons/ButtonPrimary"

import "./UxuiProjectIntro.scss"




function UxuiProjectIntro({ projectName, projectFigmaURL, projectDescription }) {

    return (
        <>
            <section className="uxui-project-intro">
                <div className="uxui-project-intro__top">
                    <h1 className="text-color-blue h2 vertical-trim-line-height--soft">{projectName}</h1>
                    <ButtonPrimary className="text-color-green svg-color-green" to={projectFigmaURL} text="Visit Figma Project" openInNewTab={true} />
                </div>
                <div className="uxui-project-intro__bottom">
                    <p className="uxui-project-intro__bottom__p">{projectDescription}</p>                
                </div>
            </section>

        </>
    )

}

export default UxuiProjectIntro

