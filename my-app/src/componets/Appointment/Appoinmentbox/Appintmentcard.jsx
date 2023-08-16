import React from 'react';


const Appintmentcard = ({card,setcontent}) => {
    const {image,text, time}=card
    return (
        <div className='m-auto bg-[#32868d] text-white p-10 rounded-md space-y-px'>
             <img className='rounded-md m-auto' src={image} alt="" />
                <h1 className='text-xl font-semibold'>{text}</h1>
                <h4 className='text-sm text-center'>{time}</h4>
                <button onClick={()=>setcontent(card)} className='bg-[#1f6e76] py-2 px-4 cursor-pointer rounded-md'><label className='cursor-pointer'  htmlFor="my_modal_6">Book Appointment</label></button>
                
        </div>
    );
};

export default Appintmentcard;