import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <Link to="/" className={location.pathname == '/' ? 'text-teal-400' : 'text-slate-500'}>Home</Link>
            <Link to="/about" className={location.pathname == '/about' ? 'text-teal-400' : 'text-slate-500'}>About</Link>
            {/* <Link to="/projects" className={location.pathname == '/projects' ? 'text-teal-400' : 'text-slate-500'}>Projects</Link> */}
            <Link to="/contact" className={location.pathname == '/contact' ? 'text-teal-400' : 'text-slate-500'}>Contact</Link>
        </>
    );
};

export default NavLinks;