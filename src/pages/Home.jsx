import React, { useEffect, useRef } from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import useTitle from '../hooks/useTitle';
import AboutDetails from '../components/AboutDetails';
import Skills from './Skills';
import Educational from '../components/Educational';
import Contact from './Contact';




const Home = () => {

    useTitle('Home');



    return (
        <div >
            <Navbar></Navbar>
            <div data-section id='home'><Header></Header></div>
            <div data-section id="experience"> <AboutDetails></AboutDetails></div>
            <div data-section id="skills"><Skills></Skills></div>
            <div data-section id="projects" className='my-10'><Projects></Projects></div>
            <div data-section id="education"><Educational></Educational></div>
            <div data-section id="contact"><Contact></Contact></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;