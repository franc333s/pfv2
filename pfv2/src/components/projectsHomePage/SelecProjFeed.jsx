import React, { useState, useEffect, Suspense } from "react";

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/config";

import ButtonPrimary from "../buttons/ButtonPrimary";
import BarLoader from "react-spinners/BarLoader";
import "./SelecProjFeed.scss"

const LazySelectedProject = React.lazy(() => import ("./selectedProject/SelectedProject"));


function SelecProjFeed () {

    const [ selectedProjects, setSelectedProjects ] = useState([]);

    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const obtainSelectedProjects = async () => {
            try {
                const projectsRef = collection(db, "selectedProjects");
                const querySnapshot = await getDocs(projectsRef);

                const projectsData = [];
                querySnapshot.forEach((doc) => {
                    projectsData.push({ id: doc.id, ...doc.data() });
                });

                setSelectedProjects(projectsData);
                setIsFetching(false);

            } catch (error) {
                console.error("Error getting selected projects:", error);
                setIsFetching(false); 
            }
        };

        obtainSelectedProjects();

    }, []);

    const barLoaderCustomStyles = {
        borderRadius: '5px'
    };


    return (
        <>
            <p className="h3 selected-proj-feed__title">Selected projects</p>

            {isFetching ? (
                <div className="home-selec-proj__spinner">
                    <BarLoader
                        color="#262626"
                        cssOverride={barLoaderCustomStyles}
                        height={4}
                        loading
                        speedMultiplier={0.4}
                        width={100}
                    />
                </div>
            ) : (
                <>
                <Suspense fallback={<div className="home-selec-proj__spinner">
                    <BarLoader
                        color="#262626"
                        cssOverride={barLoaderCustomStyles}
                        height={4}
                        loading
                        speedMultiplier={0.4}
                        width={100}
                    /></div>}>

                    {selectedProjects.map((project) => (
                        <LazySelectedProject
                            key={project.id}
                            projectName={project.projectName}
                            role={project.role}
                            year={project.year}
                            selectedProjectDesc={project.selectedProjectDesc}
                            selectedProjectImg={project.selectedProjectImg}
                            slug={project.slug}
                        />
                    ))}
                </Suspense>

                <div className="selected-proj-feed__btn">
                    <ButtonPrimary to="/projects" text="all projects" />
                </div>
                </>
            )}
        </>
    );
}

export default SelecProjFeed;