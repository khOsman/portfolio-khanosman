import React from 'react';
import Skill from '../components/Skill';

const Skills = () => {
    return (
        <div data-section id="skills" className='flex flex-col items-center text-white'>
            <div className='my-10 mx-auto'>
                <h2 className='font-bold text-3xl uppercase'>Skill Set</h2>
            </div>
            <div className='my-5 grid grid-cols-2 gap-8 m-2'>
                <Skill title={'html'} value={95}></Skill>
                <Skill title={'css'} value={90}></Skill>
                <Skill title={'bootstrap'} value={85}></Skill>
                <Skill title={'tailwind'} value={85}></Skill>
                <Skill title={'javascript'} value={75}></Skill>
                <Skill title={'react'} value={85}></Skill>
                <Skill title={'mongodb'} value={70}></Skill>
                <Skill title={'express'} value={75}></Skill>
                <Skill title={'nodejs'} value={70}></Skill>
                <Skill title={'firebase'} value={80}></Skill>
                <Skill title={'flutter'} value={65}></Skill>
                <Skill title={'dart'} value={65}></Skill>

            </div>
        </div>
    );
};

export default Skills;