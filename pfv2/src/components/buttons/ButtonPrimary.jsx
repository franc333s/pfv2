import { Link } from "react-router-dom";
import "./Button.scss"
import ArrowRight from "../arrows/ArrowRight";

const ButtonPrimary = ({ to, text, openInNewTab, className }) => {

    const linkProps = openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {}; 

    return (
        <>
            <div className={`btn--primary ${className || ""}`}>
                <ArrowRight/>
                <Link to={to} {...linkProps}>{text}</Link>
            </div>
        </>

    );
};

export default ButtonPrimary;