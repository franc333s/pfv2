import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ProjectHero from "../components/oneProjectPage/projectHero/ProjectHero";
import ProjectDesc from "../components/oneProjectPage/projectDesc/ProjectDesc";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";
import ImgGallery from "../components/oneProjectPage/imgGallery/ImgGallery";


import projectsData from "../json/projectsData.json";



function OneProject() {

    const { slug } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projectsData.find((project) => project.slug === slug);
        setProject(foundProject);
    }, [slug]);


    // const project = projectsData.find((project) => project.slug === slug);





    return (
        <>
            <header>
                <Topbar className="bg-color-white text-color-black"/>
            </header>

            <main className="topbar-offset-padding vertical-padding">
                
                {project && (
                    <>

                <ProjectHero 
                    projectName={project.projectName}
                    projectURL={project.projectURL}
                    projectImgHeroMob={project.projectImgHeroMob}
                    projectImgHeroDesk={project.projectImgHeroDesk}
                    projectImgHeroAltText={project.projectImgHeroAltText}
                />

                <ProjectDesc 
                    projectDescription={project.projectDescription}
                    role={project.role}
                    tech={project.tech}
                    month={project.month}
                    year={project.year}
                    linkGithub={project.linkGithub}
                />


                <ImgGallery project={project}
                />

                <div className="display-flex justify-content-end  padding-top--4">
                    <ButtonPrimary className="text-color-green svg-color-green" to="/projects" text="Return to all projects" />
                </div>
              </>
                )}
            </main>
        
            <Footer className="footer-padding-top"/>

           
        </>
    )
}

export default OneProject;