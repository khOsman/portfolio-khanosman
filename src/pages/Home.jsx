import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import useTitle from '../hooks/useTitle';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;