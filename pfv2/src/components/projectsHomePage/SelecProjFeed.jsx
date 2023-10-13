import ButtonPrimary from "../buttons/ButtonPrimary";
import "./SelecProjFeed.scss"

import SelectedProject from "./selectedProject/SelectedProject";
import selectedProjectsData from "../../json/selectedProjectsData.json";



function SelecProjFeed () {
    
    return (
        <>
            <p className="h3 selected-proj-feed__title">Selected projects</p>
            {selectedProjectsData.map((project) =>
                <SelectedProject 
                    key={project.id}
                    projectName={project.projectName}
                    role={project.role}
                    year={project.year}
                    selectedProjectDesc={project.selectedProjectDesc}
                    selectedProjectImg={project.selectedProjectImg}
                    slug={project.slug}
                />
            )}

            <div className="selected-proj-feed__btn">
                <ButtonPrimary to="/projects" text="View all projects" />
            </div>
        </>
    )
    
}

export default SelecProjFeed;