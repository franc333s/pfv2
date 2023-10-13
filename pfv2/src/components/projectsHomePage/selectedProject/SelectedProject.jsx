import { useState } from "react";
import ButtonPrimary from "../../buttons/ButtonPrimary";
import "./SelectedProject.scss"



function SelectedProject ({ projectName, role, year, selectedProjectImg, selectedProjectImgAltText, selectedProjectDesc, slug }) {
    
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    
    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <>
            <div className={`sel-proj ${isAccordionOpen ? "active" : ""}`}>
                <button className="sel-proj__btn" onClick={toggleAccordion}>
                    <h2 className="sel-proj__btn__title vertical-trim-line-height line-through-effect line-through-effect__line ">{projectName}</h2>
                    <div className="sel-proj__btn__specs">
                        <p className="h3">{role}</p>
                        <p className="h3">{year}</p>
                    </div>
                </button>

             
                    <div className="sel-proj__content">
                        <img className="sel-proj__content__img" src={selectedProjectImg} alt={selectedProjectImgAltText} />
                        <p className="p--small">{selectedProjectDesc}</p>
                        <ButtonPrimary className="sel-proj__content__btn" to={`/projects/${slug}`} text="Visit project" />
                    </div>
            
            </div>
        </>
    )
}

export default SelectedProject;