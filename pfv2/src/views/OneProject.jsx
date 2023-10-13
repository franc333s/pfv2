import { useParams } from "react-router-dom";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ProjectDesc from "../components/oneProjectPage/projectDesc/ProjectDesc";
import ProjectSpecs from "../components/oneProjectPage/projectSpecs/ProjectSpecs";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";


import projectsData from "../json/projectsData.json";


function OneProject() {


    const { slug } = useParams();

    const project = projectsData.find((project) => project.slug === slug);

    return (
        <>
            <header>
                <Topbar className="bg-color-white text-color-black"/>
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

                <div className="display-flex justify-content--end">
                    <ButtonPrimary className="text-color-green svg-color-green" to="/projects" text="Return to all projects" />
                </div>
            </main>
        
            <Footer className="footer-padding-top"/>


           
        </>
    )
}

export default OneProject;