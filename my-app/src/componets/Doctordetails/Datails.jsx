import React, { useEffect } from 'react';
import Docslider from './Docslider/Docslider';
import Profile from './Profile/Profile';
import About from './About/About';
import Title from '../Shared/Title/Title';

const Datails = () => {
    // scroll top body contents
   useEffect(()=>{
    window.scrollTo(0, 0);
},[])
    return (
      <>
           <Title>Datails</Title>
           <Docslider></Docslider>
           <Profile></Profile> 
           <About></About> 
        </>
    );
};

export default Datails;