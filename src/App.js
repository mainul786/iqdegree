import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import QuizPratice from './components/QuizPratice/QuizPratice';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'blog',
          element: <Blog></Blog>
        },
        {
          path:`/quiz/:quizId`,
          loader:({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element:<QuizPratice></QuizPratice>
        },
        {
          path:'*',
          element:<h1>Page Not Found! Opps!!</h1>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
