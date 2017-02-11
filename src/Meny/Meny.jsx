import React from 'react';
import { Link } from 'react-router';
import './Meny.css';

function Meny() {
    return (
        <nav className="meny">
            <ul>
                <li className="meny-logo">
                    <Link to="/">Adolph Denis Horn</Link>
                </li>
                <li><Link to="/verker/malerier">Paintings</Link></li>
                <li><Link to="/verker/litografier">Litographic works</Link></li>
                <li><Link to="/verker/katalog">Catalogue</Link></li>
                </ul>
        </nav>
    );
}

export default Meny;
