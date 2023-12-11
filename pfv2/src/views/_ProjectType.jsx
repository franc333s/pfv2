
import { Link } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Topbar from "../components/topbar/Topbar"


function ProjectType() {

    return (
        <>
            <header>
                <Topbar className="bg-color-black text-color-white"/>
            </header>

            <main className="bg-color-black topbar-offset-padding vertical-padding portfolio">
                
                <div className="portfolio__title portfolio--flex">
                    <h1 className="p--small text-color-yellow">Which type of projects you'd like to see?</h1>
                </div>

                <section className="portfolio--flex portfolio__content">
                    <div>
                        <Link className="h1 p--portfolio hover-effect" to="/projects/uxui">
                            <div className="overflow-hidden position-relative hover-effect__inner" data-text="Ux/ui projects">
                                <div className="hover-effect__text">
                                    Ux/ui projects
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link className="h1 p--portfolio hover-effect" to="/projects/dev">
                            <div className="overflow-hidden position-relative hover-effect__inner" data-text="Dev projects">
                                <div className="hover-effect__text">
                                    Dev projects
                                </div>
                            </div>
                        </Link>
                    </div>

                
                </section>
            
            </main>

            <Footer />
        </>
    )
}

export default ProjectType