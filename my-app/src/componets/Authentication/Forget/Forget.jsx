import React, { useState } from 'react';
import { useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const htmlForget = () => {
    const [email,setemail]=useState('')
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [emailerror,setemailerror]=useState('')
    const navigate=useNavigate()
    const hanldesubmit=async(e)=>{
        e.preventDefault()
        // Enter Email checks
        if(email.trim() === ''){
           setemailerror('Enter Your Email');
           return;
        }

        // check your reset email
        const check= sendPasswordResetEmail(email);
        if(check){
          await  Swal.fire({
                icon: 'success',
                title: 'Check Your Eamil',
                text: 'Success sir,Go go your email box change password',
                showConfirmButton: false,
                timer: 1500,
              })
        }
        navigate('/login')
        setemailerror('')
        
    }
    return (
<div className="antialiased bg-[#1d232a] w-screen h-screen flex items-center justify-center"> 
    <div className="max-w-lg md:w-full m-auto top-1/2 bg-[#202832] text-white p-8 rounded-xl shadow">
        <h1 onClick={()=>setalertt()} className="text-4xl font-medium">Reset password</h1>
        <p className="text-white ">Fill up the form to reset the password</p>

        <form onSubmit={hanldesubmit}  className="my-10">
            <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                    <p className="font-medium text-white  pb-2">Email address</p>
                    <input id="email" onChange={(e) => setemail(e.target.value)} name="email" type="email" className="w-full py-3 rounded-lg px-3 focus:outline-none"/>
                    {emailerror && <h1 className='text-[#ff644c] font-semibold'>{emailerror}</h1>}
                </label>
                
                <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg>
                      
                      <span>Reset password</span>
                </button>
                <p className="text-center">Not registered yet? <Link to="/register" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></Link></p>
            </div>
        </form>
    </div>
    
</div>
    );
};

export default htmlForget;