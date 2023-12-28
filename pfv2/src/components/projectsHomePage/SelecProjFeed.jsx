import React, { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/config";

import "./SelecProjFeed.scss"

const ButtonPrimary = React.lazy(() => import ("../buttons/ButtonPrimary"));
const SelectedProject = React.lazy(() => import ("./selectedProject/SelectedProject"));


function SelecProjFeed () {

    const [ selectedProjects, setSelectedProjects ] = useState([]);

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

            } catch (error) {
                console.error("Error getting selected projects:", error);
            }
        };

        obtainSelectedProjects();

    }, []);


    return (
        <>
            <p className="h3 selected-proj-feed__title">Selected projects</p>
            {selectedProjects.map((project) =>
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