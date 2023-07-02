import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="card mx-4 lg:w-96 glass">
            <img className='w-[64rem]' src={project.img} alt={project.title} />
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.desc}</p>
                <p className='mt-8'>Tech Stack:</p>
                <div className='grid lg:grid-cols-2 gap-4'>
                    {
                        project.tech.map((tech) => {
                            return (
                                <div className='flex items-center gap-4'>
                                    <img className='w-[3rem]' src={tech.logo} alt={tech.title} />
                                    <p>{tech.title}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="card-actions justify-center mt-10">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn w-full bg-green-400 text-white">View</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;