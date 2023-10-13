
import { Link } from "react-router-dom";
import "./ContactInfo.scss"


function ContactInfo ({ className }) {
    
    return (
        <>
        <div className={`${className || ""}`}>
            <div className="contact-block">
                <p className="contact-block__p">write to me at:</p>

                <div>
                    <div className="contact-block__item">
                        <h4 className="vertical-trim-line-height"><Link to="mailto:apellidofrances@gmail.com">Email</Link></h4>
                        <h5>marinafase@gmail.com</h5>
                    </div>
                    
                    <div className="contact-block__item">
                        <h4 className="vertical-trim-line-height"><Link to="https://www.linkedin.com/in/mrnfrncs/">Linkedin</Link></h4>
                        <h5>/mrnfrncs</h5>
                    </div>
                </div>

            </div>

            <div className="contact-block">
                <p  className="contact-block__p">follow me at:</p>
                <div>
                    <div className="contact-block__item">
                        <h4 className="vertical-trim-line-height"><Link to="https://github.com/franc333s">Github</Link></h4>
                        <h5>/franc333s</h5>
                    </div>

                    <div className="contact-block__item">
                        <h4 className="vertical-trim-line-height"><Link to="https://www.behance.net/apellidofrances">Behance</Link></h4>
                        <h5>@apellidofrances</h5>
                    </div>

                    <div className="contact-block__item">
                        <h4 className="vertical-trim-line-height"><Link to="https://dribbble.com/apellidofrances">Dribbble</Link></h4>
                        <h5>@apellidofrances</h5>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
    
}

export default ContactInfo;