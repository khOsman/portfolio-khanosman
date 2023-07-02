import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded text-white">
            <div className="grid grid-flow-col gap-4">
                <NavLinks></NavLinks>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Khan Osman</p>
            </div>
        </footer>
    );
};

export default Footer;