import React from 'react';
import { Link } from 'react-router-dom';

const Docslider = () => {
    // 07332F
    return (
        <div className='bg-[#07332F] h-[30vh]'>
            <div className="w-11/12 m-auto relative top-1/2 [transform:translateY(-50%)]">
            <ul className='flex'>
                <li><Link to="/">Home /</Link></li>
                <li disabled>Doctor Profile</li>
            </ul>
            <h1 className='text-3xl font-semibold my-px text-[#4dd8cd]'>Doctor Profile</h1>
        </div>
        </div>
    );
};

export default Docslider;