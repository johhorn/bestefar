import React from 'react';
import { Link } from 'react-router';
import './Meny.css';

function Meny() {
    return (
        <nav className="meny">
            <ul>
                  <li><Link to="/malerier">Malerier</Link></li>
                  <li><Link to="/tekster">Tekster</Link></li>
                  <li><Link to="/om">Om</Link></li>
            </ul>
        </nav>
  );
}

export default Meny;
