import React, { useState, useEffect, Suspense } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/config";

import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";

const LazyProjectBlock = React.lazy(() => import("../components/projectsPageBlock/ProjectBlock"));


function ProjectsPage() {

    const [ projectsData, setProjectsData ] = useState([]);

    useEffect(() => {
        const obtainProjectsData = async () => {
            try {
                const projectsRef = collection(db, "projects");
                const querySnapshot = await getDocs(projectsRef);

                const projects = [];
                querySnapshot.forEach((doc) => {
                    projects.push({ id: doc.id, ...doc.data() });
                });

                setProjectsData(projects);
            } catch (error) {
                console.error("Error getting projects:", error);
            }
        };

        obtainProjectsData();
    }, []);

    return (
        <>
            <header>
                <Topbar className="bg-color-blue text-color-white"/>
            </header>

            <main className="bg-color-blue topbar-offset-padding vertical-padding">
                <div className="projects">
                    <h1 className="h3 text-color-white">Latest dev/design projects</h1>
                    
                    <Suspense fallback={<div>Latest dev/design projects...</div>}>
                    
                    {projectsData.map((project) => (
                        <LazyProjectBlock 
                            key={project.id}
                            projectName={project.projectName}
                            slug={project.slug}
                            role={project.role}
                            year={project.year}
                            projectSummary={project.projectSummary}
                            tag={project.tag}
                        />


                    ))}
                    </Suspense>
                </div>
            </main>

            <Footer />

        </>
    )
}

export default ProjectsPage;