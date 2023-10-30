import React from 'react';
import './Question.css';
import { EyeSlashIcon } from '@heroicons/react/24/solid'


const Question = ({ topic }) => {
    const { question, options } = topic;

    return (
        <div className='question'>
           <div className='topic-icon'>
           <p>{topic.question}</p>  
           <EyeSlashIcon className="icon" />
            
           </div>



            {
                options.map(option => <li>{option}</li>)
            }

        </div>
    );
};

export default Question;