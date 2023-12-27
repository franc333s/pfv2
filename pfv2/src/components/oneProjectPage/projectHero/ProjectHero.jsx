import ButtonSecondary from "../../buttons/ButtonSecondary"

import "./ProjectHero.scss"




function ProjectHero({ projectName, projectURL, projectImgHeroMob, projectImgHeroDesk, projectImgHeroAltText }) {


    return (
        <>
            <section className="project-hero">
                <div className="project-hero__title">
                    <h1 className="text-color-blue text-transform--uppercase h2--variation vertical-trim-line-height--soft">{projectName}</h1>
                    <ButtonSecondary to={projectURL} openInNewTab={true} />
                </div>
                <div className="project-hero__img">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={projectImgHeroDesk} />
                        <img className="project-hero__img__inner" src={projectImgHeroMob} alt={projectImgHeroAltText} />
                    </picture>
                </div>
            </section>

        </>   
    )

}

export default ProjectHero

