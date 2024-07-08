import React from 'react';
import './styles/AppComp.css';

const AppComp3 = ({ arr }) => {
    return (
        <div>
            <h1>App Component 3 Array</h1>
            {arr.map((element, index) => {
                return (
                    // key={index} is array index for reference to value
                    // {element} is the array of values
                    <>
                        <div key={index} >
                            <h3> {element} </h3>
                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default AppComp3;