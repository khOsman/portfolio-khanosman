import React, { useCallback } from 'react';
import { Typewriter } from 'react-simple-typewriter'

import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Header = ({ onLeft }) => {

    const skillSet = ['HTML5', 'CSS3', 'React', 'Tailwind', 'DaisyUI', 'MaterialUI', 'Bootstrap', 'NodeJS', 'Express', 'MongoDB', 'Firebase', 'RestAPI!'];
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }



    const Particles = () => {
        return (
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 8,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 1,
                            "out_mode": "out"
                        },
                        "shape": {
                            "type": [
                                "image",
                                "circle"
                            ],
                            "image": [
                                {
                                    "src": "/react.cd2ab268.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "/k8s.2d579d24.svg",
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": "/code.b3b4c4f4.png",
                                    "height": 20,
                                    "width": 20
                                }
                            ]
                        },
                        "color": {
                            "value": "#CCC"
                        },
                        "size": {
                            "value": 30,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 10,
                                "sync": false
                            }
                        }
                    },
                    "retina_detect": false
                }} />
        );
    }

    return (
        <div className="hero h-screen my-10 text-white " >
            {/* <Particles /> */}
            <div className={onLeft ? "hero-content flex-col lg:flex-row-reverse" : "hero-content flex-col "}>
                <img src={onLeft ? "./images/mdosman.jpeg" : "./images/mdOsman.jpg"} className="w-[150px] h-[150px] rounded-full lg:w-[300px] lg:h-[300px] lg:max-w-sm lg:rounded-full shadow-3xl shadow-black" />
                <div>
                    <h1 className="text-5xl text-center font-bold">Hi! I'm Osman!</h1>
                    <p className="py-6 text-center">
                        I am a skilled Software Engineer with around 3.5 years of experience in software development. I have been working on a team that developed top-listed applications maintaining the software development life cycle and using the latest technologies like -
                        <br />
                        <span className='text-2xl lg:text-3xl text-green-400 font-bold'>
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

                        </span> <br /> - seeking a <span className='font-bold'>Full Stack</span> <span className='text-green-700 font-bold'>M</span><span className='text-slate-700 font-bold'>E</span><span className='text-sky-400 font-bold'>R</span><span className='text-green-400 font-bold'>N</span> developer position to utilize my knowledge and skills.
                    </p>
                    <div className='flex justify-center items-center gap-4'>
                        {/* <div className="badge badge-lg p-4 hover:bg-sky-400 bg-sky-500 hover:text-white border-none"><a href="https://www.facebook.com/khan.osman01" target="_blank" rel="noopener noreferrer">Facebook</a></div>
                        <div className="badge badge-lg p-4 hover:bg-sky-500 bg-sky-700 hover:text-white border-none"><a href="https://www.linkedin.com/in/khanosman01/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                        <div className="badge badge-lg p-4 hover:bg-black hover:text-white border-none"><a href="https://github.com/khOsman" target="_blank" rel="noopener noreferrer">Github</a></div> */}
                        <a href="https://www.facebook.com/khan.osman01" target="_blank" rel="noopener noreferrer"><img className='w-[32px] h-[32px] lg:w-full lg:h-full' src="./images/facebook.png" alt="" /></a>
                        <a href="https://github.com/khOsman" target="_blank" rel="noopener noreferrer"><img className='w-[32px] h-[32px] lg:w-full lg:h-full' src="./images/github.png" alt="" /></a>
                        <a href="https://www.linkedin.com/in/khanosman01/" target="_blank" rel="noopener noreferrer"><img className='w-[32px] h-[32px] lg:w-full lg:h-full' src="./images/linkedin.png" alt="" /></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;