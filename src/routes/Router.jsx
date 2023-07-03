import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../components/Projects';

const Router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Main></Main>,
    //     children: [

    //     ]
    // },
    {
        path: '/',
        element: <Home></Home>
    },
    // {
    //     path: '/about',
    //     element: <About></About>
    // },
    // {
    //     path: '/projects',
    //     element: <Projects></Projects>
    // },
    // {
    //     path: '/contact',
    //     element: <Contact></Contact>
    // }
]);

export default Router;