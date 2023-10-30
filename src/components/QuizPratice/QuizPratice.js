import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizPratice = () => {
    const quizData = useLoaderData();
    const {name, questions} = quizData.data;
   
    
    return (
        <div>
            <h3>Quiz Topic: {name}</h3>
            {
                questions.map( topic => <Question
                key={topic.id}
                topic={topic}
                ></Question>)
            }
        </div>
    );
};

export default QuizPratice;