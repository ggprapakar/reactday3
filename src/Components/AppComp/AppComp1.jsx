import React from 'react';
import './styles/AppComp.css';

const AppComp1 = ({a}) => {
    return (
        <div>
            <h1>App Component 1</h1>
            <p>This is my single component props value: {a} </p>
        </div>
    );
};

export default AppComp1;