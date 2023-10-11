import "./SelectedProject.scss"


function SelectedProject ({ projectName, role, year }) {
    
    return (
        <>
            <div className="selected-project">
                <h2 className="selected-project__title vertical-trim-line-height">{projectName}</h2>
                <div className="selected-project__specs">
                    <p className="h3">{role}</p>
                    <p className="h3">{year}</p>
                </div>
                <div>
                    <img src="" alt="" />
                    
                </div>
            </div>
        </>
    )
    
}

export default SelectedProject;