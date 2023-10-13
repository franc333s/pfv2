import Footer from "../components/footer/Footer";
import ProjectBlock from "../components/projectsPageBlock/ProjectBlock";
import Topbar from "../components/topbar/Topbar";


import projectsData from "../json/projectsData.json";


function ProjectsPage() {

    return (
        <>
            <header>
                <Topbar className="bg-color-blue text-color-white"/>
            </header>

            <main className="bg-color-blue topbar-offset-padding vertical-padding">
                <div className="projects">
                    <h1 className="h3 text-color-white">Latest dev/design projects</h1>
                    {projectsData.map((project) => 
                        <ProjectBlock 
                            key={project.id}
                            projectName={project.projectName}
                            slug={project.slug}
                            role={project.role}
                            year={project.year}
                            projectSummary={project.projectSummary}
                        />
                    )}
                </div>
            </main>

            <Footer />

        </>
    )
}

export default ProjectsPage;