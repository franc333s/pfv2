// import ButtonPrimary from "../../buttons/ButtonPrimary"

import { Link } from "react-router-dom";
import "./UxuiProjectDesc.scss"


const renderParagraphs = (text) => {
    const formattedText = text.replace(/\n/g, "\n\n");
    return formattedText.split("\n\n").map((paragraph, index) => (
      <p className="uxui-project-desc__specs__text" key={index}>{paragraph}</p>
    ));
};

function UxuiProjectDesc({ projectImg, projectAltText, projectDescAux,role, month, year, projectFigmaURL }) {

    return (
        <>
            <section className="uxui-project-desc">
                <img className="uxui-project-desc__img" src={projectImg} alt={projectAltText} />

                <div className="uxui-project-desc__specs">
                    <p className="uxui-project-desc__specs__text">{renderParagraphs(projectDescAux)}</p>
                    
                    <div>

                        <div className="uxui-project-desc__specs__group">
                            <h3 className=" project-specs__h3">role</h3>
                            <p className=" project-specs__p">{role}</p>
                        </div>

                        <div className="uxui-project-desc__specs__group">
                            <h3 className=" project-specs__h3">date</h3>
                            <p className=" project-specs__p">{month} {year}</p>
                        </div>

                        <p className="uxui-project-desc__specs__figma text-color-blue">Check the whole project on <Link className="project-specs-github__link" to={projectFigmaURL} target="_blank">Figma</Link>.</p>


                    </div>

                </div>

            </section>

        </>
    )

}

export default UxuiProjectDesc

