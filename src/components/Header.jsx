import React from 'react';

const Header = () => {
    return (
        <div className="hero min-h-screen bg-slate-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="./public/images/mdOsman.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hi! I'm Osman!</h1>
                    <p className="py-6">
                        I am a skilled Software Engineer with around 3.5 years of experience in software development. I have been working on a team that developed top-listed applications maintaining the software development life cycle and using the latest technologies like - Flutter, React, Tailwind, Express,MongoDB, & Nodejs - seeking a software engineer{`[MERN developer]`} position to utilize my knowledge and skills.
                    </p>
                    <div className='flex gap-4'>
                        <div className="badge badge-lg p-4 bg-sky-400 border-none"><a href="https://www.facebook.com/khan.osman01" target="_blank" rel="noopener noreferrer">Facebook</a></div>
                        <div className="badge badge-lg p-4 bg-sky-700 border-none"><a href="https://www.linkedin.com/in/khanosman01/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                        <div className="badge badge-lg p-4 border-none"><a href="https://github.com/khOsman" target="_blank" rel="noopener noreferrer">Github</a></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;