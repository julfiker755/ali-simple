import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Title from '../../Shared/Title/Title';
import { axiosinstance } from '../../Shared/Instance/Instance';


const Register = () => {
    const navigate=useNavigate()
    const [displayName,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [conpass,setconpass]=useState('')
    const [error1,seterror]=useState('')
    const [value,setvalue]=useState(true)
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [user,error,loading] = useAuthState(auth);




    const handlesubmit=(e)=>{
        e.preventDefault()
        if(password !== conpass){
            seterror('password not match')
            return 
        }
        // image file uploaded
        const img=e.target.image.files[0]
        const formData = new FormData()
        formData.append('image', img)
        const URL=`https://api.imgbb.com/1/upload?key=f13b6ed6eb87de0c6b2f1b04f43d222c`
        fetch(URL, {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(async datap => {
            const  photoURL=datap?.data.display_url
            // console.log(data?.data.display_url)
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName, photoURL });
            const {data}=await axiosinstance.post('/login',{email})
            data?.accesstoken && localStorage.setItem('assentoken',data.accesstoken)
            // monogo db user add
            await axiosinstance.post('/user',{email,displayName, photoURL, password})
          })
         user && navigate('/')
        seterror('')
        
        // console.log({name,email,img,password,conpass})
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            {/* Title start */}
         <Title>Register</Title>
         {/* Title end */}
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6  font-semibold space-y-2 md:space-y-px sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            <div className='text-center'>Create a New Account</div>
                        </h1>
                        <form onSubmit={handlesubmit}  className="space-y-4 md:space-y-6" >
                            {/* your Name */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input onChange={(e)=>setname(e.target.value)} type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                            </div>
                            {/* Your email */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input onChange={(e)=>setemail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}  />
                            </div>
                            {/* image upload starts */}
                            <input  className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name='image'  type="file"/>
                            {/* image upload ends */}
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={(e)=>setpassword(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}   />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input onChange={(e)=>setconpass(e.target.value)} type="text" name="confirm-password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                {error1 && <h1 className='text-[#3768c5]'>{error}</h1>}
                            </div>
                            <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input onChange={()=>setvalue(!value)} id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                            {/* buttons your webssite */}
                            <button disabled={value} type="submit" className="w-full bg-[#4791ba] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{loading ? 'loading....':'Create an account'}</button>
                            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link  to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login Here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;