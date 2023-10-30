import React from 'react';

const Question = ({topic}) => {
    const {question, options} = topic;
 
    return (
        <div>
            <p>{topic.question}</p>
            {
                options.map(option =><li>{option}</li>)
            }
        </div>
    );
};

export default Question;