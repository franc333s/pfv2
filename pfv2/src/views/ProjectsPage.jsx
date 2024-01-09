import React, { useState, useEffect, Suspense } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/config";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";
import BarLoader from "react-spinners/BarLoader";

const LazyProjectBlock = React.lazy(() => import("../components/projectsPageBlock/ProjectBlock"));

function ProjectsPage() {

    const [ projectsData, setProjectsData ] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const sortedProjects = projectsData.slice().sort((a, b) => a.id - b.id);

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
                setIsFetching(false);
            } catch (error) {
                console.error("Error getting projects:", error);
                setIsFetching(false); 
            }
        };

        obtainProjectsData();
    }, []);

    const barLoaderCustomStyles = {
        borderRadius: '5px'
    };


    return (
        <>
            <header>
                <Topbar className="bg-color-blue text-color-white"/>
            </header>

            <main className="bg-color-blue topbar-offset-padding vertical-padding">
                <div className="projects">
                    <h1 className="h3 text-color-yellow">Latest dev/design projects</h1>
                    
                    <Suspense fallback={<div className="projects__spinner">
                        <BarLoader
                            color="#ffffff"
                            cssOverride={barLoaderCustomStyles}
                            height={4}
                            loading
                            speedMultiplier={0.4}
                            width={100}
                        />
                    </div>}>

                    {isFetching || sortedProjects.length === 0 ? (
                        <div className="projects__spinner">
                            <BarLoader
                                color="#ffffff"
                                cssOverride={barLoaderCustomStyles}
                                height={4}
                                loading
                                speedMultiplier={0.4}
                                width={100}
                            />
                        </div>
                    ) : (
                    
                    sortedProjects.map((project) => (
                        <LazyProjectBlock 
                            key={project.id}
                            projectName={project.projectName}
                            slug={project.slug}
                            role={project.role}
                            year={project.year}
                            projectSummary={project.projectSummary}
                            tag={project.tag}
                        />
                        ))
                    )}

                    </Suspense>

                </div>
            </main>

            <Footer />

        </>
    )
}

export default ProjectsPage;