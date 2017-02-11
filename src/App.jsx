import React from 'react';
import Meny from './Meny';

function App ({ children }) {
    return (
        <div>
            <Meny />
            <h1>Adolph Denis Horn</h1>
            {children}
        </div>
    );
}

export default App;
