import React from 'react';
import { Link } from 'react-router-dom';

const AHome = () => {
    return (
        <div className='bg-[#07332F] h-[30vh]'>
            <div className="w-11/12 m-auto relative top-1/2 [transform:translateY(-50%)]">
                <ul className='flex'>
                    <li><Link to="/">Home /</Link></li>
                    <li disabled>Appointment</li>
                </ul>
                <h1 className='text-3xl font-semibold my-px text-[#4dd8cd]'>Appointment</h1>
            </div>
        </div>
    );
};

export default AHome;