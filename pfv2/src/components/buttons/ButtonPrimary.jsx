import { Link } from "react-router-dom";
import "./Button.scss"

import ArrowRight from "../arrows/ArrowRight";


const ButtonPrimary = ({ to, text, openInNewTab, className }) => {

    const linkProps = openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {}; 

    return (
        <>
            <ArrowRight/>
            <Link className={`btn--primary ${className || ""}`} to={to} {...linkProps}>{text}</Link>
        </>

    );
};

export default ButtonPrimary;