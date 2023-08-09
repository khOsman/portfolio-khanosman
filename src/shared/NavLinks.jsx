import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll'
import useTitle from '../hooks/useTitle';

const NavLinks = () => {
    // const location = useLocation();

    const [pageId, setPageId] = useState('');
    const [activeSection, setActiveSection] = useState(null);
    const handleOnClick = (id) => {
        console.log('Id location', id);
        setPageId(id);
        setActiveSection(id);

    }

    // let title = '';
    // if (location.pathname === '/') title = 'Home';
    // if (location.pathname === '/about') title = 'About';
    // if (location.pathname === '/projects') title = 'Projects';
    // if (location.pathname === '/skills') title = 'Skill';
    // if (location.pathname === '/contact') title = 'Contact';
    useTitle(pageId.toLocaleUpperCase());


    const observer = useRef(null);
    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            //Update state with the visible section ID
            if (visibleSection) {
                // setActiveSection(visibleSection.id);
                console.log('visibleSection', visibleSection.id);
                setActiveSection(visibleSection.id);
            }
        });

        //Get custom attribute data-section from all sections
        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        //Cleanup function to remove observer
        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };

    }, []);


    return (
        <>
            {/* text-teal-400 */}
            <li><Link onClick={() => handleOnClick("home")} smooth={true} duration={1000} to="home" className={(activeSection === 'home') ? 'text-green-400' : 'text-slate-500'}>About Me</Link></li>
            <li><Link onClick={() => handleOnClick("experience")} smooth={true} duration={1000} to="experience" className={activeSection === 'experience' ? 'text-green-400' : 'text-slate-500'}>Experiences</Link></li>
            <li><Link onClick={() => handleOnClick("skills")} smooth={true} duration={1000} to="skills" className={activeSection === 'skills' ? 'text-green-400' : 'text-slate-500'}>Skills</Link></li>
            <li><Link onClick={() => handleOnClick("projects")} smooth={true} duration={1000} to="projects" className={activeSection === 'projects' ? 'text-green-400' : 'text-slate-500'}>Projects</Link></li>
            <li><Link onClick={() => handleOnClick("education")} smooth={true} duration={1000} to="education" className={activeSection === 'education' ? 'text-green-400' : 'text-slate-500'}>Education</Link></li>
            <li><Link onClick={() => handleOnClick("contact")} smooth={true} duration={1000} to="contact" className={activeSection === 'contact' ? 'text-green-400' : 'text-slate-500'}>Contact</Link></li>
        </>
    );
};

export default NavLinks;