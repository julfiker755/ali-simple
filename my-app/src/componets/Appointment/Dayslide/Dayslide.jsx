import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../images/chair 1.png'
const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    background-color:#546a81;
    color:white;
  }
`;

const Dayslide = ({selected,setSelected}) => {
    return (
        <div className='w-11/12 m-auto'>
          <div className='my-10'>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
              <div className='m-auto rounded-md bg-[#2d3742] order-2 md:order-none'>
              <style>{css}</style>
              <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              modifiersClassNames={{
                selected: 'my-selected',
              }}
    />
              </div>
              <img className='w-full h-full order-1 md:order-none' src={chair} alt="" />
            </div>
          </div>
        </div>
    );
};

export default Dayslide;