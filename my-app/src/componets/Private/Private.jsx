import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Authentication/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Private = ({children}) => {
    const [user, loading,] = useAuthState(auth);
    let location = useLocation();
    if(loading){
        return <h1 className='text-5xl text-center font-semibold text-[red] py-[50px border border-[green]'>Loading......</h1>
    }
   
    if(user && user.uid){
       return children
    }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default Private;