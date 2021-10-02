import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="#" >
                <img className="logo" alt="logo" src="logo-cupcake.png" />
            </Link>
            <ul>
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