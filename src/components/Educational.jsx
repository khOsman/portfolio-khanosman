import React from 'react';

const Educational = () => {
    return (
        <div className='flex flex-col items-center text-white'>
            <div className='my-10 mx-auto'>
                <h2 className='font-bold text-2xl  lg:text-3xl uppercase'>Educational Background</h2>
            </div>
            <div className='my-5 grid grid-cols-1 gap-8'>
                <ul className="steps steps-vertical">
                    <li data-content="●" className="step step-success">B.Sc. in Computer Science - Independent University, Bangladesh </li>
                    <li data-content="●" className="step step-success">HSC - Govt. Tolaram College</li>
                    <li data-content="●" className="step step-success">SSC - Adarsha School Narayanganj</li>
                </ul>
            </div>
        </div>
    );
};

export default Educational;