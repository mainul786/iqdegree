import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css';


const Home = () => {
    const quizData = useLoaderData();
    const quizs = quizData.data;
    

    return (
       

            <div className='quiz-container'>
                {
                    quizs.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            
                
                
            </div>
                  

       
    );
};

export default Home;