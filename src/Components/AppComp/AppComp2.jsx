import React from 'react';
import './styles/AppComp.css';

const AppComp2 = ({obj}) => {
    return (
        <div>
            <h1>App Component 2 Object</h1>
            <div>
            <p>This is my Object component props name value: {obj.name} </p>
            <p>This is my Object component props age value: {obj.age} </p>
            </div>
            
        </div>
    );
};

export default AppComp2;