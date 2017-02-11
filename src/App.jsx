import React from 'react';
import {
    Meny,
    UnderMeny
} from './Meny';

function App ({ children }) {
    return (
        <div>
            <Meny />
            <UnderMeny />
            {children}
        </div>
    );
}

export default App;
