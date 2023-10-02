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
        <div className={getTopbarClasses()}>
            
            <Link onClick={ closeMenu } to="/" className="topbar__home">Marina Francés</Link>
            
            <button onClick={ toggleMenu } className="topbar__btn">Menu</button>
            
            <nav className={ `topbar__nav ${ menu ? 'isActive' : '' }` }>
                <ul className="topbar__nav__list">
                    <li className="topbar__nav__list__item"><Link onClick={ closeMenu }  to="/projects" className="topbar__nav__item">Projects</Link></li>
                    <li className="topbar__nav__list__item"><Link onClick={ closeMenu } to="/info" className="topbar__nav__item">Info</Link></li>
                </ul>
            </nav>

        </div>
    </>
    )
}
	
export default Topbar;