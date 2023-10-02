import ButtonPrimary from "../buttons/ButtonPrimary";
import "./SelectedProjects.scss"
ButtonPrimary

function SelectedProjects () {
    
    return (
        <>
            <section className="selected-proj">
                <p className="h3 ">Selected projects</p>

                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title vertical-trim-line-height">Cuatro&nbsp;Cuatros</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Frontend</p>
                        <p className="h3">2023</p>
                    </div>
                </div>
               
                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title vertical-trim-line-height">Crude</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Ux/ui&nbsp;+&nbsp;Frontend</p>
                        <p className="h3">2023</p>
                    </div>
                </div>
                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title vertical-trim-line-height">Pokédex</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Ux/ui&nbsp;+&nbsp;Frontend</p>
                        <p className="h3">2023</p>
                    </div>
                </div>
                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title vertical-trim-line-height">About</h2>
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