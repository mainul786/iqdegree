import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPratice = () => {
    const quizData = useLoaderData();
    const question = quizData.data;
    console.log(question)
    return (
        <div>
            <h3>quiz pratice</h3>
        </div>
    );
};

export default QuizPratice;