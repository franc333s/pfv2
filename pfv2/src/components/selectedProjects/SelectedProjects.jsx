import "./SelectedProjects.scss"

function SelectedProjects () {
    
    return (
        <>
            <section className="selected-proj">
                <p className="h3">Selected projects</p>
                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title">Cuatro Cuatros</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Frontend</p>
                        <p className="h3">2023</p>
                    </div>
                </div>
                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title">Crude</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Ux/ui + Frontend</p>
                        <p className="h3">2023</p>
                    </div>
                </div>
                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title">Pokédex</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Ux/ui + Frontend</p>
                        <p className="h3">2023</p>
                    </div>
                </div>
                <div className="selected-proj__project">
                    <h2 className="selected-proj__project__title">About</h2>
                    <div className="selected-proj__project__specs">
                        <p className="h3">Ux/ui + Frontend</p>
                        <p className="h3">2022</p>
                    </div>
                </div>
            </section>
        </>
    )
    
}

export default SelectedProjects;