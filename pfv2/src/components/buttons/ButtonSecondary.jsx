import { Link } from "react-router-dom";
import "./Button.scss"

import ArrowRight from "../arrows/ArrowRight";


const ButtonPrimary = ({ to, openInNewTab, className }) => {

    const linkProps = openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {}; 

    return (
        <>
            <div className={`btn--secondary ${className || ""}`}>
                <Link to={to} {...linkProps}><ArrowRight/></Link>
            </div>
        </>

    );
};

export default ButtonPrimary;