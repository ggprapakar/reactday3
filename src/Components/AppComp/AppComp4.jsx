import React from 'react';
import './styles/AppComp.css';

const AppComp4 = ({ arrObj }) => {
    return (
        <>
            <div class="container">
            <div class='row row-cols-1 g-4 row-cols-md-3'>
                {arrObj.map((element, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title"> {element.id} </h4>
                                            <h4 class="card-title"> {element.name} </h4>
                                            <h4 class="card-title"> {element.age} </h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
            </div>
            
        </>
    );
};

export default AppComp4;