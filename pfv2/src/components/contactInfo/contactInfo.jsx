
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
                        <h4 className="vertical-trim-line-height">
                            <Link className="hover-effect" to="mailto:marinafase@gmail.com">
                                <div className="overflow-hidden position-relative hover-effect__inner" data-text="Email">
                                    <div className="hover-effect__text">
                                       Email
                                    </div>
                                </div>

                            </Link></h4>
                        <h5>marinafase@gmail.com</h5>
                    </div>
                    
                    <div className="contact-block__item">
                        <h4 className="vertical-trim-line-height">
                            <Link className="hover-effect" target="_blank" to="https://www.linkedin.com/in/mrnfrncs/">
                                <div className="overflow-hidden position-relative hover-effect__inner" data-text="Linkedin">
                                    <div className="hover-effect__text">
                                        Linkedin
                                    </div>
                                </div>
                            </Link>
                        </h4>
                        <h5>/mrnfrncs</h5>
                    </div>
                </div>

            </div>

            <div className="contact-block">
                <p  className="contact-block__p">follow me at:</p>
                <div>
                    <div className="contact-block__item">
                        <h4 className="vertical-trim-line-height">
                            <Link className="hover-effect" target="_blank" to="https://github.com/franc333s">
                                <div className="overflow-hidden position-relative hover-effect__inner" data-text="Github">
                                    <div className="hover-effect__text">
                                        Github
                                    </div>
                                 </div>
                            </Link>
                        </h4>
                        <h5>/franc333s</h5>
                    </div>

                    <div className="contact-block__item">
                        <h4 className="vertical-trim-line-height">
                            <Link className="hover-effect" target="_blank" to="https://www.behance.net/apellidofrances">
                                <div className="overflow-hidden position-relative hover-effect__inner" data-text="Behance">
                                    <div className="hover-effect__text">
                                        Behance
                                    </div>
                                </div>
                            </Link>
                        </h4>
                        <h5>@apellidofrances</h5>
                    </div>

                    <div className="contact-block__item">
                        <h4 className="vertical-trim-line-height">
                            <Link className="hover-effect" target="_blank" to="https://dribbble.com/apellidofrances">
                                <div className="overflow-hidden position-relative hover-effect__inner" data-text="Dribbble">
                                    <div className="hover-effect__text">
                                        Dribbble
                                    </div>
                                </div>
                            </Link>
                        </h4>
                        <h5>@apellidofrances</h5>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
    
}

export default ContactInfo;