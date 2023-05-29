import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = () => {

    const location = useLocation();
    console.log(location);

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">khanOsman</a>
            </div>
            <div className="navbar-center hidden lg:flex bg-slate-100 px-8 py-4 rounded-full">
                <ul className="menu menu-horizontal lg:flex lg:gap-6 px-1">
                    <NavLinks></NavLinks>
                </ul>
            </div>
            <div className="navbar-end">
                {location.pathname !== '/contact' ? <Link to="/contact" className="btn btn-success bg-slate-100">Hire Me</Link> : <></>}
            </div>
        </div>
    );
};

export default Navbar;