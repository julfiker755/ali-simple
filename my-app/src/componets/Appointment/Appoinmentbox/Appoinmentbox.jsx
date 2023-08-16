import React, { useState } from 'react';
import { format } from 'date-fns';
import img1 from '../../../images/a/img1.png'
import img2 from '../../../images/a/img2.png'
import img3 from '../../../images/a/img3.png'
import img4 from '../../../images/a/img4.png'
import img5 from '../../../images/a/img5.png'
import Appintmentcard from './Appintmentcard';
import Modal from './Modal';
import Private from '../../Private/Private';


const Appoinmentbox = ({selected}) => {
    const [content,setcontent]=useState(null)
    const objappointment=[
        {    id:1,
            image:img1,
            text:'Teeth Orthodontics',
            time:'8:00 AM - 9:00 AM',
        },{
            id:2,
            image:img2,
            text:'Cosmetic Dentistry',
            time:'10.05 AM - 11:30 AM',
        },{
            id:3,
            image:img3,
            text:'Teeth Cleaning',
            time:'8:00 AM - 9:00 AM',
        },{
             id:4,
            image:img4,
            text:'Teeth Orthodontics',
            time:'8:00 AM - 9:00 AM',
        },{
             id:5,
            image:img5,
            text:'Teeth Orthodontics',
            time:'8:00 AM - 9:00 AM',
        }
    ]
    return (
        <div className='my-10 w-11/12 m-auto'>
             <h1 className='text-base text-center text-[#79f64c]'>🤢Available Services on  {selected ? format(selected, 'PP'):'✔select date'}🤢</h1>
            <h1 className='text-4xl font-semibold text-center'>Available slots for Teeth Orthodontics.</h1>
             <div className='grid my-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
               {objappointment.map(card=><Appintmentcard key={card?.id} setcontent={setcontent} card={card}></Appintmentcard>)}
             </div>
             {/* this your modal use for websitess */}
             {content && <Private><Modal content={content} selected={selected}></Modal></Private>}
        </div>

    );
};

export default Appoinmentbox;