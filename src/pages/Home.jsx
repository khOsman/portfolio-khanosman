import React from 'react';
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
            <Header></Header>
            <Projects></Projects>
            <AboutDetails></AboutDetails>
            <Skills></Skills>
            <Educational></Educational>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;