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
            <Navbar></Navbar>
            <Header onLeft={true} img={"https://scontent.fdac34-1.fna.fbcdn.net/v/t1.6435-9/38911592_2032993840067406_4887139777406566400_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEy7bDPfPSWEqvOP2KoT1tl1X06A5LxQ_TVfToDkvFD9JOKx1Q8vLZfr7MSHeis_ohfQn3At0vAxwU5QfdJ9k_a&_nc_ohc=ONGSh3j0Z-EAX_xxaty&_nc_ht=scontent.fdac34-1.fna&oh=00_AfCtXck7Ie2RIYdFBA9PK06GKRyh0KUj_fAU0k-VPX8QsQ&oe=649BC7DE"}></Header>
            <AboutDetails></AboutDetails>
            <Skills></Skills>
            <Educational></Educational>
            <Footer></Footer>
        </div>
    );
};

export default About;