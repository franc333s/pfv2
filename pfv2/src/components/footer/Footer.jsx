import { Link } from "react-router-dom";

import "./Footer.scss"

function Footer() {

    return (
        <>
            <footer>
                <ul className="footer vertical-padding">
                    <li className="footer__item"><Link to={"mailto:marinafase@gmail.com"}>Contact</Link></li>
                    <li className="footer__item"><Link to="/info">Info</Link></li>
                    <li className="footer__item">&#169;2023</li>
                </ul>
            </footer>
        </>
    )

}

export default Footer;