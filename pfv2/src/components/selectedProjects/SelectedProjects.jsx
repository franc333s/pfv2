import ButtonPrimary from "../buttons/ButtonPrimary";
import "./SelectedProjects.scss"
ButtonPrimary

function SelectedProjects () {
    
    return (
        <>
            <section className="selected-proj">
                <p className="h3 ">Selected projects</p>

                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title line-height-86">Cuatro&nbsp;Cuatros</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Frontend</p>
                        <p className="h3">2023</p>
                    </div>
                </div>
               
                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title line-height-86">Crude</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Ux/ui&nbsp;+&nbsp;Frontend</p>
                        <p className="h3">2023</p>
                    </div>
                </div>
                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title line-height-86">Pokédex</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Ux/ui&nbsp;+&nbsp;Frontend</p>
                        <p className="h3">2023</p>
                    </div>
                </div>
                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title line-height-86">About</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Ux/ui&nbsp;+&nbsp;Frontend</p>
                        <p className="h3">2022</p>
                    </div>
                </div>
                <ButtonPrimary className="contact-block__btn" to="/projects" text="View all projects" />
            </section>
        </>
    )
    
}

export default SelectedProjects;