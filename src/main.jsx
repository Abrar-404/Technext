import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Pages/Home/Home';
import UsersDetails from './Components/Pages/UsersDetails/UsersDetails';
import NewUserDetails from './Components/NewUsers/NewUserDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
      },
      {
        path: '/users/:id',
        element: <NewUserDetails></NewUserDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
