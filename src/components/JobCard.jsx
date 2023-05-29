import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div className="card md:card-side bg-base-100 shadow-xl m-4">
            <figure><img class="w-[12rem]" src={job.logo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job.title}</h2>
                <h2 className="text-sm">{job.company}</h2>
                <ul>Job Description:
                    {
                        job.desc.map((item, id) => <li key={id} >{item}</li>)
                    }
                </ul>
                <p className='text-xs'>Experience: {job.experience} Years</p>
                <p></p>
            </div>
        </div>
    );
};

export default JobCard;