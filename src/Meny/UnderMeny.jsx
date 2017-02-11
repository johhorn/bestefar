import React from 'react';
import { Link } from 'react-router';
import './UnderMeny.css';

function UnderMeny() {
    return (
        <nav className="underMeny">
            <Link to="/om">About</Link>
        </nav>
    );
}

export default UnderMeny;
