import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import CommonLayout from './components/CommonLayout/CommonLayout';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import DataVisual from './components/DataVisualization/DataVisual';
import Design from './pages/Design';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout></CommonLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/dataVisual',
        element: <DataVisual></DataVisual>
      },
      {
        path: '/design',
        element: <Design></Design>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
