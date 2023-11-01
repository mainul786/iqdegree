import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizPratice.css';

const QuizPratice = () => {
    const quizData = useLoaderData();
    const { name, questions } = quizData.data;


    return (
        <div className='quiz-topic'>
            <h3>Quiz Topic: {name}</h3>
            <div className='topic'>
                {
                    questions.map( topic => <Question
                        key={topic.id}
                        topic={topic}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default QuizPratice;