import React from 'react';
import './custom.jsx'
import { BiTimeFive } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
const Location = () => {
    return (
        <div className='w-11/12 m-auto my-10 text-white'>
           <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex gap-2 bg-[#07332F] white p-4 rounded-md'>
                <BiTimeFive size={40}/>
                <div>
                    <h1 className='text-2xl font-bold mb-2'>Opening Hours</h1>
                    <p className='text-base'>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className='flex gap-2 bg-[#F7A582] white p-4 rounded-md'>
                <GrLocation style={{color:'white'}} size={40}/>
                <div>
                    <h1 className='text-2xl font-bold mb-2'>Our Locations</h1>
                    <p className='text-base'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className='flex gap-2 md:col-span-2 lg:col-span-1 bg-[#07332F] white p-4 rounded-md'>
                <BsFillTelephoneForwardFill size={40}/>
                <div>
                    <h1 className='text-2xl font-bold mb-2'>Contact Us</h1>
                    <p className='text-base'>+88 01750 00 00 00 M<br/>+88 01750 00 00 00</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Location;