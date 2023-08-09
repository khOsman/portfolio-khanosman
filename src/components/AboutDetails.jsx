import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const AboutDetails = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('experience.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);


    return (
        <div className='flex flex-col items-center text-white'>
            <div className='my-10 text-center'>
                <h2 className='font-bold text-3xl uppercase'>Experience</h2>
            </div>
            <div className='my-5 grid  grid-cols-1 gap-8'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default AboutDetails;