import React, { useState } from 'react';
import servises1 from '../../../images/Rectangle 20078.png'
import servises2 from '../../../images/Rectangle 10.png'
const OurServices = () => {
    const [activetab,setactivetab]=useState('cavitey')
    return (
       <div className='w-11/12 m-auto my-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className='hidden lg:block'><img src={servises1} alt="" /></div>
            <div>
                <h1 className='text-3xl lg:text-4xl font-semibold'>Our Services</h1>
                 <p className='my-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                 <div className='flex-warap md:flex  border rounded-md border-[#ada7dd] p-1'>
                    <button onClick={()=>setactivetab('cavitey')} className={`rounded-md w-full ${activetab === 'cavitey' && 'bg-[#2a8190]'} py-4`}>Cavity Protection</button>
                    <button onClick={()=>setactivetab('cosmetic')} className={`rounded-md w-full ${activetab === 'cosmetic' && 'bg-[#2a8190]'} py-4`}>Cosmetic Dentisty</button>
                    <button onClick={()=>setactivetab('oral')} className={`rounded-md w-full ${activetab === 'oral' && 'bg-[#2a8190]'} py-4`}>Oral Surgery</button>
                 </div>
                 <div className='flex justify-center lg:justify-start'> <img className='my-4' src={servises2} alt="" /></div>
                 <h1 className='text-3xl lg:text-4xl font-semibold my-3'>Electro  Gastrology Therapy</h1>
                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                 <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                 <button className='btn my-2 btn-primary capitalize'>More Details</button>
            </div>
          </div>
       </div>
    );
};

export default OurServices;