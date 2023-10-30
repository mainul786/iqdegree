import React from 'react';

const Quiz= ({quiz}) => {
    const {name, logo, total} = quiz;
    return (
        <div>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <p><small>Total: {total}</small></p>
        </div>
    );
};

export default Quiz;