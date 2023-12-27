import Footer from "../components/footer/Footer";
import Topbar from "../components/topbar/Topbar";
import UxuiProjectIntro from "../components/uxuiOneProjectPage/uxuiProjectIntro/UxuiProjectIntro";
import UxuiProjectDesc from "../components/uxuiOneProjectPage/UxuiProjectDesc/UxuiProjectDesc";
import { useParams } from "react-router-dom";



import uxuiProjectsData from "../json/uxuiProjectsData.json";


function UxuiOneProject() {


    const { slug } = useParams();

    const project = uxuiProjectsData.find((project) => project.slug === slug);


    return (
        <>
            <header>
                <Topbar className="bg-color-white text-color-black"/>
            </header>

            <main className="topbar-offset-padding vertical-padding">
                
            <UxuiProjectIntro 
                projectName={project.projectName}
                projectFigmaURL={project.projectFigmaURL}
                projectDescription={project.projectDescription}
            />

            <UxuiProjectDesc 
                projectImg={project.projectImg}
                projectAltText={project.projectAltText}
                projectDescAux={project.projectDescAux}
                role={project.role}
                month={project.month}
                year={project.year}
                projectFigmaURL={project.projectFigmaURL}
   
            />

                
            </main>

            <Footer />

        </>
    )
}

export default UxuiOneProject;