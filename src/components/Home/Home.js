import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizData = useLoaderData();
    const quizs = quizData.data;

    return (
        <div>
            <h1>This Home component</h1>
            <h3>quiz: {quizs.length}</h3>
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