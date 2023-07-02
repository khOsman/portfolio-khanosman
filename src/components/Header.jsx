import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
const Header = ({ onLeft }) => {

    const skillSet = ['HTML5', 'CSS3', 'React', 'Tailwind', 'DaisyUI', 'MaterialUI', 'Bootstrap', 'NodeJS', 'Express', 'MongoDB', 'Firebase', 'RestAPI!'];
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }


    return (
        <div className="hero min-h-screen text-white ">
            <div className={onLeft ? "hero-content flex-col lg:flex-row-reverse" : "hero-content flex-col lg:flex-row"}>
                <img src={onLeft ? "./images/mdosman.jpeg" : "./images/mdOsman.jpg"} className="w-[200px] h-[200px] rounded-full lg:w-full lg:h-full lg:max-w-sm lg:rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hi! I'm Osman!</h1>
                    <p className="py-6 mb-4">
                        I am a skilled Software Engineer with around 3.5 years of experience in software development. I have been working on a team that developed top-listed applications maintaining the software development life cycle and using the latest technologies like -
                        <span className='text-green-400 font-bold'>
                            <Typewriter
                                words={skillSet}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}

                            />
                        </span> - seeking a Software Engineer {`[`}<span className='text-green-700 font-semibold'>M</span><span className='text-slate-700 font-semibold'>E</span><span className='text-sky-400 font-semibold'>R</span><span className='text-green-400 font-semibold'>N</span> developer{`]`} position to utilize my knowledge and skills.
                    </p>
                    <div className='flex gap-4'>
                        {/* <div className="badge badge-lg p-4 hover:bg-sky-400 bg-sky-500 hover:text-white border-none"><a href="https://www.facebook.com/khan.osman01" target="_blank" rel="noopener noreferrer">Facebook</a></div>
                        <div className="badge badge-lg p-4 hover:bg-sky-500 bg-sky-700 hover:text-white border-none"><a href="https://www.linkedin.com/in/khanosman01/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                        <div className="badge badge-lg p-4 hover:bg-black hover:text-white border-none"><a href="https://github.com/khOsman" target="_blank" rel="noopener noreferrer">Github</a></div> */}
                        <a href="https://www.facebook.com/khan.osman01" target="_blank" rel="noopener noreferrer"><img className='w-[32px] h-[32px] lg:w-full lg:h-full' src="./images/facebook.png" alt="" /></a>
                        <a href="https://www.linkedin.com/in/khanosman01/" target="_blank" rel="noopener noreferrer"><img className='w-[32px] h-[32px] lg:w-full lg:h-full' src="./images/linkedin.png" alt="" /></a>
                        <a href="https://github.com/khOsman" target="_blank" rel="noopener noreferrer"><img className='w-[32px] h-[32px] lg:w-full lg:h-full' src="./images/github.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;