import React from 'react';

const Blog = () => {
    return (
        <div>
           <h2>What is the purpose of React Router?</h2>
           <p>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>

           <h3>Context Api?</h3>
           <p>Context API allows data to be passed through a component tree without having to pass props manually at every level.</p>

           <h3>What is useref?</h3>
           <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.</p>
        </div>
    );
};

export default Blog;