import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Topbar.scss";


function Topbar({ scrollStage, className }) {

    const [ menu , setMenu ] = useState( false );
    const toggleMenu = () => {
        setMenu( !menu )
    }
    const closeMenu = () => {
        setMenu( false )
    }

    const getTopbarClasses = () => {
    switch (scrollStage) {
        case 1:
            return 'topbar stage1';
        case 2:
            return 'topbar stage2';
        case 3:
            return 'topbar stage3';
        case 4:
            return 'topbar stage4';
        default:
            return `topbar ${className || ""}`;
    }
  };

    return (
    <>
        <nav className={getTopbarClasses()}>
            
            <Link onClick={ closeMenu } to="/" className="cursor-pointer hover-effect">
                <div className="overflow-hidden position-relative hover-effect__inner" data-text="Marina Francés">
                    <div className="hover-effect__text">
                        Marina Francés
                    </div>
                </div>
            </Link>
            
            <button onClick={ toggleMenu } className="topbar__btn">
                Menu
            </button>
            
            <ul className={ `topbar__nav ${ menu ? 'isActive' : '' }` }>
                <li className="topbar__nav__item">
                    <Link onClick={ closeMenu }  to="/projects" className="topbar-inner-margin-top hover-effect">
                        <div className="overflow-hidden position-relative hover-effect__inner" data-text="Projects">
                            <div className="hover-effect__text">
                                Projects
                            </div>
                        </div>
                    </Link>
                </li>

                <li className="topbar__nav__item">
                    <Link onClick={ closeMenu }  to="/lab" className="topbar-inner-margin-top hover-effect">
                        <div className="overflow-hidden position-relative hover-effect__inner" data-text="Lab">
                            <div className="hover-effect__text">
                                Lab
                            </div>
                        </div>
                    </Link>
                </li>

                <li className="topbar__nav__item">
                    <Link onClick={ closeMenu } to="/info" className="hover-effect">
                        <div className="overflow-hidden position-relative hover-effect__inner" data-text="Info">
                            <div className="hover-effect__text">
                                Info
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>

        </nav>
    </>
    )
}
	
export default Topbar;