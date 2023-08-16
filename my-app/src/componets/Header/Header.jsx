import React, { useState } from 'react';
import logo from '../../images/logo.png'
import { AiOutlineMenu } from 'react-icons/Ai';
import { FaTimes } from 'react-icons/Fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../Authentication/firebase/firebase';
const Header = () => {
    const [mobile,setmobile]=useState(true)
    const [user]=useAuthState(auth)
    const [show,setshow]=useState(false)
    const [signOut] = useSignOut(auth);
    const navigate=useNavigate()
    const handlelogout=async()=>{
        await signOut()
        localStorage.removeItem("assentoken");
        navigate('/')
        setshow(!show)
    }
   //  console.log(user?.photoURL)
    return (
       <header className='bg-[#07332F] z-50 sticky top-0 left-0 text-white'>
         <div className='w-11/12  m-auto'>
           <div className='flex justify-between lg:py-3 p-2 lg:p-0 items-center'>
             <img className='w-32 h-10'  src={logo} alt="" />                        
             <ul className='hidden lg:flex items-center space-x-3 cursor-pointer'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/appontment">Appointment</Link></li>
                <li> <Link to="/dashboard/home">Dashboard</Link></li>
                {/* {user ? <button className='bg-[red]'>Log out</button>:<Link to="/login">Login</Link>} */}
                <li className='relative'>{user ? <div onClick={()=>setshow(!show)} className='w-9 h-9 border rounded-full'><img className='w-full h-full rounded-full' src={user?.photoURL} alt="" /></div> :<Link to="/login">Login</Link>}
                {/* sub menu profile */}
                {show && <div className='absolute pointer-events-none top-10 p-3 space-y-2 right-0 w-[150px]  rounded-md bg-[#267d75]'>
                  {/* {user?.displayName} */}
                  <h4 className='truncate lowercase'>{user?.displayName}</h4>
                  <button onClick={()=>handlelogout()} className='w-full !pointer-events-auto bg-[#35a297] rounded-md p-1'>Log Out</button>
                </div>}
                </li>
                
             </ul>
             <div onClick={()=>setmobile(!mobile)} className='lg:hidden'>
                {mobile ? <AiOutlineMenu/> :<FaTimes/>}
             </div>
             {/* mobile device your wepsites */}
             <ul className={`lg:hidden z-50 transition-all !ease-[cubic-bezier(.17,.67,.83,.67)] fixed top-0 ${mobile ? 'left-[-100%]':'left-0'} p-4 space-y-2 bg-[#212c45] w-1/2 h-full`}>
             <img className='w-32 h-10 mb-3'  src={logo} alt="" /> 
                <li>Home</li>
                <li> About </li>
                <li>Appointment </li>
                <li>Login</li>
             </ul>
           </div>
        </div>
       </header>
    );
};

export default Header;