import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavLinks from './NavLinks';


const Navbar = () => {

    const location = useLocation();
    console.log(location);

    const handleDownload = () => {

        const resumeLink = 'https://drive.google.com/file/d/1hNRdnXdcpo8sptzyikIkGvsGYEgHL4VW/view?usp=drive_link';
        window.open(resumeLink, '_blank');
    };


    return (
        <div className="navbar  bg-base-200 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
                <Link to='/' className=" normal-case text-xl font-semibold text-green-400">khanOsman</Link>
            </div>
            <div className="navbar-center hidden lg:flex bg-slate-100 px-8 py-4 rounded-full">
                <ul className="menu menu-horizontal lg:flex lg:gap-6 px-1">
                    <NavLinks></NavLinks>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <button onClick={handleDownload} className="hidden lg:block btn btn-success bg-slate-100">Get Resume</button> */}
                <img onClick={handleDownload} className='block w-[32px] h-[32px] md:w-[48px] md:h-[48px] ' src="./images/download.png" alt="download-gif" />
            </div>
        </div>
    );
};

export default Navbar;