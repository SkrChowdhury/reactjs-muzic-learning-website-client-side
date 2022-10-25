import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../components/Home/Home';
import Blog from '../components/Blog/Blog';
import Courses from '../components/Courses/Courses';
import FAQ from '../FAQ/FAQ';

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
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
]);
