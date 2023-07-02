import React from 'react';

const JobCard = ({ job }) => {
    console.log("Job", job.timeline);
    return (
        <div className="card md:card-side glass shadow-xl m-4 p-4">
            <figure><img class="w-[12rem]" src={job.logo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job.title}</h2>
                <h2 className="text-sm">{job.company}</h2>
                <ul>Job Description:
                    {
                        job.desc.map((item, id) => <li key={id} >{item}</li>)
                    }
                </ul>
                {job.timeline && <p className='text-xs'>Timeline: {job.timeline}</p>}
                <p className='text-xs'>Experience: {job.experience} Years</p>
                <p></p>
            </div>
        </div>
    );
};

export default JobCard;