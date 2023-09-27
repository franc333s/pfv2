import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Topbar.scss";


function Topbar() {

    const [ menu , setMenu ] = useState( false );
    const toggleMenu = () => {
        setMenu( !menu )
    }
    const closeMenu = () => {
        setMenu( false )
    }
    
    return (
    <>
        <div className="topbar">
            
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