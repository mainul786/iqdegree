import React from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';

const Quiz= ({quiz}) => {
    
    const {name, logo, total, id} = quiz;
    const nevigate = useNavigate();

    const handleNavigate =  () =>{
       nevigate(`/quiz/${id}`);
    }

    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-info'>
            <h2>{name}</h2>
            <p>Total: {total}</p>
            <button className='btn-test' onClick={handleNavigate}>Start Test</button>
            </div>
        </div>
    );
};

export default Quiz;