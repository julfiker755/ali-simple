import React, { useState } from 'react';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase';
import Title from '../../Shared/Title/Title';
import { axiosinstance } from '../../Shared/Instance/Instance';

//register
const LogIn = () => {
    const [value,setvalue]=useState(true)
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const navigate=useNavigate()
    const [signInWithEmailAndPassword,error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
//  how to handle create login user panden
    const handlelogin=async(e)=>{
      e.preventDefault()
        await signInWithEmailAndPassword(email,password)
        const {data}=await axiosinstance.post('/login',{email})
        data?.accesstoken && localStorage.setItem('assentoken',data.accesstoken)
        navigate(from, { replace: true })
       
    }
  


    return (
        <div className="bg-gray-50 dark:bg-gray-900">
        {/* Title start */}
         <Title>Login</Title>
         {/* Title end */}
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center capitalize font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handlelogin} className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input onChange={(e)=>setemail(e.target.value)} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input onChange={(e)=>setpassword(e.target.value)} type="text" name="password" id="password"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" onChange={()=>setvalue(!value)} aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            {/* <Link to="/forget" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link> */}
                            <Link to="/forget" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer">
                                Forgot password?</Link>
                        </div>
                        {/* your button here boss */}
                        <button disabled={value} type="submit" className="w-full text-white bg-[#671818] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <div className="divider">OR</div>
                        {/* for google */}
                        <div>
                            <button onClick={async()=>{
                              const success=await signInWithGoogle()
                                if(success){
                                    navigate('/')
                                }
                            }} className='w-full py-2 rounded-md text-white bg-[#3d7ff0]'>Google sign In</button>
                        </div>
                        <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                            Don't have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
};

export default LogIn;