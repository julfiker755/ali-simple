import React from 'react';
import logo from '../../../images/logo.png'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
   const navigate=useNavigate()
    return (
        <div className='bg-[#10214693] py-10'>
             <div className='w-11/12 m-auto'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
             <div>
                <img className='w-32 h-10' src={logo} alt="" />
                <p className='my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
                <button onClick={()=>navigate('/appontment')} className='btn btn-outline btn-secondary w-full lg:w-1/2'>Appointment</button>
             </div>
             <div>
                <h1 className='text-3xl text-[#297b60] font-semibold my-3'>Quick Links</h1>
                <ul>
                <li>About Us</li>
                <li>Service</li>
                <li>Doctors</li>
                <li>Departments</li>
                <li>Online Payment</li>
                <li>Contact Us</li>
                <li>My Account</li>
                </ul>
             </div>
             <div>
                <h1 className='text-3xl text-[#297b60] font-semibold my-3'>Doc House Services</h1>
                <ul>
                <li>Pediatric Clinic</li>
                <li>Diagnosis Clinic</li>
                <li>Cardiac Clinic</li>
                <li>Laboratory Analysis</li>
                <li>Gynecological Clinic</li>
                <li>Personal Counseling</li>
                <li>Dental Clinic</li>
                </ul>
             </div>
             <div>
                <h1 className='text-3xl text-[#297b60] font-semibold my-3'>Working Hours</h1>
                <ul>
                <li> Monday - 10 am to 7 pm</li>
                <li>Tuesday - 10 am to 7 pm</li>
                <li>Wednesday - 10 am to 7 pm</li>
                <li>Thursday - 10 am to 7 pm</li>
                <li>Friday - 10 am to 7 pm</li>
                <li>Saturday - 10 am to 7 pm</li>
                <li>Sunday - 10 am to 7 pm</li>
                </ul>
             </div>
          </div>
        </div>
        </div>
       
    );
};

export default Footer;