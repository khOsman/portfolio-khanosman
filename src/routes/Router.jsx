import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
]);

export default Router;