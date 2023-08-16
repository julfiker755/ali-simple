import React, { useEffect } from 'react';
import Slider from './Slider/Slider';
import OurServices from './OurServices/OurServices';
import Location from './Location/Location';
import Says from './Says/Says';
import Doctors from './Doctors/Doctors';
import Contact from './Contact/Contact';
import Title from '../Shared/Title/Title';



const Home = () => {
        // scroll top body contents
   useEffect(()=>{
    window.scrollTo(0, 0);
   },[])  
    return (
        <div>
           <Title>Doctor Home</Title>
           <Slider></Slider>
           <OurServices/>
           <Location></Location>
           <Says></Says>
           <Doctors></Doctors>
           <Contact></Contact>
        </div>
    );
};

export default Home;