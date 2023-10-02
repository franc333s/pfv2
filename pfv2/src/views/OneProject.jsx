import { useParams } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ProjectDesc from "../components/projectComp/projectDesc/ProjectDesc";
import ProjectSpecs from "../components/projectComp/projectSpecs/ProjectSpecs";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";


import projectsData from "../json/projectsData.json";


function OneProject() {


    const { slug } = useParams();

    const project = projectsData.find((project) => project.slug === slug);

    return (
        <>
            <header>
                <Topbar className="bg-color-blue text-color-white"/>
            </header>

            <main className="topbar-offset-padding vertical-padding">
                
                <ProjectDesc 
                    projectName={project.projectName}
                    projectURL={project.projectURL}
                    projectDescription={project.projectDescription}
                    projectImg={project.projectImg}
                />

                <ProjectSpecs 
                    role={project.role}
                    tech={project.tech}
                    month={project.month}
                    year={project.year}
                    linkGithub={project.linkGithub}
                />

                <div>
                    <ButtonPrimary to="/projects" text="Return to all projects" />
                </div>
            </main>
        
            <Footer />


           
        </>
    )
}

export default OneProject;