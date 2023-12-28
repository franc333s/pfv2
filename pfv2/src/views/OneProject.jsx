import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// import projectsData from "../json/projectsData.json";

import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/config";


const Topbar = React.lazy(() => import ("../components/topbar/Topbar"));
const ButtonPrimary = React.lazy(() => import ("../components/buttons/ButtonPrimary"));
const ProjectHero = React.lazy(() => import ("../components/oneProjectPage/projectHero/ProjectHero"));
const ProjectDesc = React.lazy(() => import ("../components/oneProjectPage/projectDesc/ProjectDesc"));
const ImgGallery = React.lazy(() => import ("../components/oneProjectPage/imgGallery/ImgGallery"));
const Footer = React.lazy(() => import ("../components/footer/Footer"));


function OneProject() {

    const { slug } = useParams();
    const [project, setProject] = useState(null);

    

    // useEffect(() => {
    //     const foundProject = projectsData.find((project) => project.slug === slug);
    //     setProject(foundProject);
    // }, [slug]);


    // const project = projectsData.find((project) => project.slug === slug);


    //
    useEffect(() => {
        const obtainProject = async () => {
            try {
                const projectsRef = collection(db, "projects");
                const q = query(projectsRef, where("slug", "==", slug));
                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {
                    setProject(doc.data());
                });
            } catch (error) {
                console.error("Error getting project:", error);
            }
        };

        obtainProject();
    }, [slug]);
    //




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