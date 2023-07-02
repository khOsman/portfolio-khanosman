import React from 'react';

const Skill = ({ title, value }) => {
    return (
        <div className='flex gap-4 items-center'>
            <h2 className='uppercase'>{title}</h2>
            <progress className="progress progress-success  w-56" value={value} max="100"></progress>
        </div>
    );
};

export default Skill;