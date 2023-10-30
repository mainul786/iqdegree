import React from 'react';
import './Quiz.css';

const Quiz= ({quiz}) => {
    const {name, logo, total} = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-info'>
            <h2>{name}</h2>
            <p>Total: {total}</p>
            <button className='btn-test'>Start Test</button>
            </div>
        </div>
    );
};

export default Quiz;