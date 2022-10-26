import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../components/Home/Home';
import Blog from '../components/Blog/Blog';
import Courses from '../components/Courses/Courses';
import FAQ from '../FAQ/FAQ';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () =>
          fetch('https://muzic-server-side-skrchowdhury.vercel.app/course'),
      },
      {
        path: '/courses/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://muzic-server-side-skrchowdhury.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/*',
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);
