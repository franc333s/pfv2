
import { Link } from "react-router-dom"
import "./ProjectDesc.scss"

const renderParagraphs = (text) => {
    const formattedText = text.replace(/\n/g, "\n\n");
    return formattedText.split("\n\n").map((paragraph, index) => (
      <p className="project-desc__text" key={index}>{paragraph}</p>
    ));
  };

  const ProjectDesc = ({ projectDescription, role, tech, month, year, linkGithub }) => {




    return (
        <> 
            <section className="project-desc">

                <aside className="project-desc__specs">

                    <div className="project-desc__group">
                        <h3 className="project-desc__group__item project-desc__h3">role</h3>
                        <p className="project-desc__group__item project-desc__p">{role}</p>
                    </div>

                    <div className="project-desc__group">
                        <h3 className="project-desc__group__item project-desc__h3">tech</h3>
                        <p className="project-desc__group__item project-desc__p">{tech}</p>
                    </div>

                    <div className="project-desc__group">
                        <h3 className="project-desc__group__item project-desc__h3">date</h3>
                        <p className="project-desc__group__item project-desc__p">{month} {year}</p>
                    </div>

                </aside>

                <p className="p--medium">
                {renderParagraphs(projectDescription)}
                </p>
                
            </section>
            <div className="project-desc-github">
                <p className="project-desc-github__p text-color-green">Check this project on <Link className="project-desc-github__link" to={linkGithub} target="_blank">Github</Link>.</p>
            </div>
        </>
    )
}

export default ProjectDesc