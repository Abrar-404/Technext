import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Pages/Home/Home';
import UsersDetails from './Components/Pages/UsersDetails/UsersDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/userDetails/:id',
        element: <UsersDetails></UsersDetails>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/users/${params.id}`),
        // loader: ({ params }) =>
        //   fetch(`https://dummyjson.com/users/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
