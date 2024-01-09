import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/config";

import Topbar from "../components/topbar/Topbar";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import Footer from "../components/footer/Footer";
import BarLoader from "react-spinners/BarLoader";


const LazyProjectHero = React.lazy(() => import ("../components/oneProjectPage/projectHero/ProjectHero"));
const LazyProjectDesc = React.lazy(() => import ("../components/oneProjectPage/projectDesc/ProjectDesc"));
const LazyImgGallery = React.lazy(() => import ("../components/oneProjectPage/imgGallery/ImgGallery"));


function OneProject() {

    const { slug } = useParams();
    const [project, setProject] = useState(null);

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

    const barLoaderCustomStyles = {
        borderRadius: '5px'
    };



    return (
        <>
            <header>
                <Topbar className="bg-color-white text-color-black"/>
            </header>

            <main className="topbar-offset-padding vertical-padding">
                
                {project && (

                <>
                <Suspense fallback={<div className="projects__spinner">
                        <BarLoader
                            color="#262626"
                            cssOverride={barLoaderCustomStyles}
                            height={4}
                            loading
                            speedMultiplier={0.4}
                            width={100}
                        /></div>}>

                    <LazyProjectHero 
                        projectName={project.projectName}
                        projectURL={project.projectURL}
                        projectImgHeroMob={project.projectImgHeroMob}
                        projectImgHeroDesk={project.projectImgHeroDesk}
                        projectImgHeroAltText={project.projectImgHeroAltText}
                    />

                    <LazyProjectDesc 
                        projectDescription={project.projectDescription}
                        role={project.role}
                        tech={project.tech}
                        month={project.month}
                        year={project.year}
                        linkGithub={project.linkGithub}
                    />


                    <LazyImgGallery 
                        project={project}
                    />
                </Suspense>

                <div className="display-flex justify-content-end  padding-top--4">
                    <ButtonPrimary className="text-color-green svg-color-green" to="/projects" text="Return to projects" />
                </div>
                
                </>
                )}
            </main>
        
            <Footer className="footer-padding-top"/>

           
        </>
    )
}

export default OneProject;