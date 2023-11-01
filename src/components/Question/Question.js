import React from 'react';
import './Question.css';
import { EyeSlashIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({topic}) => {
    const { question, options, correctAnswer } = topic;
    const notify = () =>toast.success(`${correctAnswer}`, {
        position: toast.POSITION.TOP_RIGHT
    });;

    return (
        <div className='question'>
           <div className='topic-icon'>
           <p>{topic.question}</p>  
         <div>
         <EyeSlashIcon onClick={notify} className="icon"  >
         </EyeSlashIcon>
         <ToastContainer></ToastContainer>
         </div>
         </div>



            {
                options.map( option => <li>{option}</li>)
            }

        </div>
    );
};

export default Question;