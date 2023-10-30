import React from 'react';

const Question = ({topic}) => {
    const {question, options} = topic;
    console.log(topic)
    console.log(question)
    console.log(options)
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