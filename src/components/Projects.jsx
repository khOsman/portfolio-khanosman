import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div className='flex flex-col items-center'>
            <div className='my-10 mx-auto'>
                <h2 className='font-bold text-3xl uppercase'>Projects</h2>
            </div>
            <div className='my-10 mx-auto grid md:grid-cols-3 gap-4'>
                {
                    projects.map((project, id) => <ProjectCard key={id} project={project} ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;