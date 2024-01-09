import { Link } from "react-router-dom";

import "./Footer.scss"

function Footer({ className }) {

    return (
        <>
            <footer className={`${className || ""}`}>
                <ul className="footer vertical-padding">
                    <li className="footer__item">
                        <Link className="hover-effect" to={"mailto:marinafase@gmail.com"}> 
                            <div className="overflow-hidden position-relative hover-effect__inner" data-text="Contact">
                                <div className="hover-effect__text">
                                    Contact
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="footer__item">
                        <Link className="hover-effect" to="/info">
                            <div className="overflow-hidden position-relative hover-effect__inner" data-text="Info">
                                <div className="hover-effect__text">
                                    Info
                                </div>
                            </div>
                            
                        </Link>
                    </li>
                    <li className="footer__item">&#169;2024</li>
                </ul>
            </footer>
        </>
    )

}

export default Footer;