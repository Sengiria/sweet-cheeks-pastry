import './header.styles.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [ toggle, setToggle ] = useState(false)

    const toggleMenu = () => setToggle(!toggle)

    return (
        <header>
            <Link to="#" >
                <img className="logo" alt="logo" src="logo-cupcake.png" />
            </Link>
            <div
            onClick={toggleMenu} 
            className="toggle"
            style={{backgroundImage: `url(${toggle ? "close.png" : "menu,png"})`}}></div>
            <ul className={`navigation ${toggle ? "active" : ""}`}>
                <li>
                    <Link to="#">Home</Link>
                </li>
                <li>
                    <Link to="#">Menu</Link>
                </li>
                <li>
                    <Link to="#">What's new</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;