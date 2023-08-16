import React, { useState } from 'react';
import { FaGg } from 'react-icons/fa';
import {useNavigate } from 'react-router-dom';
import auth from '../../Authentication/firebase/firebase';
import { useUpdatePassword } from 'react-firebase-hooks/auth';


const Changepass = () => {
    const navigate=useNavigate()
    const [password, setPassword] = useState('');
    const [updatePassword, updating] = useUpdatePassword(auth);
    const handlepassord=async(event)=>{
        event.preventDefault()
        const success = await updatePassword(password);
        if(success){
         console.log('success')
        }
        setPassword('')
    }
    return (
        <div> 
            <button onClick={()=>navigate('/dashboard/alluser')} className='flex gap-px items-center text-white'><FaGg size='30px' style={{color:'white'}}/><span className='text-[20px]'>Next</span></button>
            {/* main part div */}
            <div>
            <div className="antialiased bg-[#1d232a] h-[calc(100vh-70px)] flex justify-center items-center"> 
    <div className="max-w-lg md:w-full m-auto  bg-[#202832] text-white p-8 rounded-xl shadow">
        <h1  className="text-4xl font-medium">Update Password </h1>
        <form onSubmit={handlepassord}  className="my-10">
            <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                    <p className="font-medium text-white  pb-2">New Password</p>
                    <input id="email" onChange={(e)=>setPassword(e.target.value)}  type="text" className="w-full py-3 rounded-lg px-3 focus:outline-none"/>
                   
                </label>
                
                <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg>
                      
                      <span>Update</span>
                </button>
            </div>
        </form>
    </div>
    
</div>
            </div>
        </div>
    );
};

export default Changepass;