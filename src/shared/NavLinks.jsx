import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll'
import useTitle from '../hooks/useTitle';

const NavLinks = () => {
    // const location = useLocation();
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // };
    const [pageId, setPageId] = useState('');
    const handleOnClick = (id) => {
        console.log('Id location', id);
        setPageId(id);
    }

    // let title = '';
    // if (location.pathname === '/') title = 'Home';
    // if (location.pathname === '/about') title = 'About';
    // if (location.pathname === '/projects') title = 'Projects';
    // if (location.pathname === '/skills') title = 'Skill';
    // if (location.pathname === '/contact') title = 'Contact';
    useTitle(pageId.toLocaleUpperCase());


    return (
        <>
            {/* text-teal-400 */}
            <li><Link onClick={() => handleOnClick("home")} smooth={true} duration={1000} to="home" className={(pageId === 'home' || pageId === '') ? 'text-green-400' : 'text-slate-500'}>About Me</Link></li>
            <li><Link onClick={() => handleOnClick("projects")} smooth={true} duration={1000} to="projects" className={pageId == 'projects' ? 'text-green-400' : 'text-slate-500'}>Projects</Link></li>
            <li><Link onClick={() => handleOnClick("experience")} smooth={true} duration={1000} to="experience" className={pageId === 'experience' ? 'text-green-400' : 'text-slate-500'}>Experiences</Link></li>
            <li><Link onClick={() => handleOnClick("skills")} smooth={true} duration={1000} to="skills" className={pageId === 'skills' ? 'text-green-400' : 'text-slate-500'}>Skills</Link></li>
            <li><Link onClick={() => handleOnClick("contact")} smooth={true} duration={1000} to="contact" className={pageId === 'contact' ? 'text-green-400' : 'text-slate-500'}>Contact</Link></li>
        </>
    );
};

export default NavLinks;