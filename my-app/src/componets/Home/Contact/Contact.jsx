import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';
import { CiCalendarDate } from 'react-icons/ci';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = () => {
    return (
        <div className='w-11/12 m-auto bg-[#07332F] text-white p-10 rounded-md my-10 grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <h1 className='text-3xl font-semibold my-3 text-white'>Contact With Us</h1>
                <p className='my-px text-xl'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <ul className='my-5 space-y-3'>
                        <li className='flex items-center gap-1'><BiLocationPlus size={24}/>Dhanmondi, Dhaka, Bangladesh</li>
                        <li className='flex items-center gap-1'><BsFillTelephoneFill size={26}/>+88 01750 14 14 14</li>
                    </ul>
            </div>
            <div>
             <div className='grid grid-cols-1 gap-y-4 lg:grid-y-0  lg:grid-cols-2 lg:gap-4'>
              <input type="text" placeholder="Name" className="input w-full bg-[#155e58e4] input-bordered" />
              <input type="text" placeholder="Email" className="input w-full bg-[#155e58e4]   input-bordered" />
              <input type="text" placeholder="Mobile Number" className="input bg-[#155e58e4]  w-full  input-bordered" />
              <input type="text" placeholder="Doctor Name" className="input  bg-[#155e58e4] w-full  input-bordered" />
              <input type="text" placeholder="Date" className="input w-full bg-[#155e58e4]   input-bordered" />
              <button className='btn btn-success text-white hover:border-[#1a6e9be4] hover:bg-[#1a6e9be4] border border-[#1a6e9be4] bg-[#1a6e9be4] w-full col-span-1 lg:col-span-2'>Book Now</button>
             </div>
            </div>
        </div>
    );
};

export default Contact;