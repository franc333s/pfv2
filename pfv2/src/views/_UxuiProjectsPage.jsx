import Footer from "../components/footer/Footer";
import UxuiProjectBlock from "../components/projectsPageBlock/UxuiProjectBlock";
import Topbar from "../components/topbar/Topbar";



import uxuiProjectsData from "../json/uxuiProjectsData.json";


function UxuiProjects() {

    return (
        <>
            <header>
                <Topbar className="bg-color-green text-color-white"/>
            </header>

            <main className="bg-color-green topbar-offset-padding vertical-padding">
                <div className="projects">
                    <h1 className="h3 text-color-white">Latest ux/ui projects</h1>
                    {uxuiProjectsData.map((project) => 
                        <UxuiProjectBlock 
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

export default UxuiProjects;