import React from 'react';
import Header from '../components/Header';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import AboutDetails from '../components/AboutDetails';
import Educational from '../components/Educational';
import Skills from '../pages/Skills';
import useTitle from '../hooks/useTitle';


const About = () => {
    useTitle('About');
    return (
        <div>

            <Header onLeft={true}></Header>
            <AboutDetails></AboutDetails>
            <Skills></Skills>
            <Educational></Educational>

        </div>
    );
};

export default About;