import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className='h-screen my-10 mx-auto'>
                <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


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