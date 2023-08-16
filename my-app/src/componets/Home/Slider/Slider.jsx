import React from 'react';
import rightimge from '../../../images/slider-right.png'

const Slider = () => {
    return (
        <div className='bg-[#07332F] h-[calc(100vh-64px)] text-white'>
         <div  className='w-11/12 m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 flex-row-reverse'>
            <div className='self-center'>
                <h1 className='text-4xl font-bold  lg:text-5xl py-3 md:pb-3 text-center md:text-left'>Your Best Medical<br/> Help Center</h1>
                <p className='text-center  md:text-left pb-3'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                <button className='btn-primary btn-sm  lg:btn-success lg:btn !capitalize w-full md:w-fit'>All Service</button>
                </div>
          <div>
            <img src={rightimge} alt="" />
          </div>
        </div>
        </div>
        </div>
    );
};

export default Slider;