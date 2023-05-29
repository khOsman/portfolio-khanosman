import React from 'react';
import Header from '../components/Header';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import AboutDetails from '../components/AboutDetails';
import Educational from '../components/Educational';
import Skills from '../pages/Skills';


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <AboutDetails></AboutDetails>
            <Skills></Skills>
            <Educational></Educational>
            <Footer></Footer>
        </div>
    );
};

export default About;