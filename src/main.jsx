import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ErrorPage from './pages/404error';
import ProductPage from './pages/products';
import Dasboard from './pages/dashboard';
import Contact from './pages/contact';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    elementError: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,

  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/dashboard",
    element: <Dasboard />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }

  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
