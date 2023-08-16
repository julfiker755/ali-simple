import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';
import { CiCalendarDate } from 'react-icons/ci';
import { BsCurrencyDollar } from 'react-icons/bs';
import doc1 from '../../../images/doc1.png'
import doc2 from '../../../images/doc2.png'
import doc3 from '../../../images/doc3.png'
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
    const navigate=useNavigate()
    const doctorsobj=[
        {id:1,img:doc1,name:'Karyen Anderson'},
        {id:2,img:doc2,name:"Karyen Anderson"},
        {id:3,img:doc3,name:"Karyen Anderson"}
    ]
 
    return (
        <div className='w-11/12 m-auto my-10'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-semibold'>Our Expert Doctors</h1>
                <p className='mt-3 text-sm md:text-base lg:text-xl'>    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsaexplicabo. <span className={`hidden lg:flex`}>{'\n'}</span>  quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt </p>
            </div>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3'>
                {doctorsobj.map((dails,index)=><div key={index} className={`border rounded-md  p-5 border-[#4160a7] lg:col-span-1`}>
                    <img className='w-full rounded-md' src={dails.img} alt="" />
                    <div className='my-3 space-x-px'>
                    <h1 className='text-3xl font-bold'>{dails?.name}</h1>
                    <h3>BTP -  Senior Physiotherapist</h3>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                    </div>
                    <ul className='space-y-1 text-[#8db9d5]'>
                        <li className='flex items-center gap-1'><BiLocationPlus size={24}/>Dhanmondi, Dhaka, Bangladesh</li>
                        <li className='flex items-center gap-1'><CiCalendarDate size={26}/>Available On Mon, 22 December</li>
                        <li className='flex items-center gap-1'><BsCurrencyDollar size={26}/>$15</li>
                    </ul>
                    <button onClick={()=>navigate(`/doctordatils`)} className='btn btn-primary w-full md:w-fit lg:w-fit my-4 capitalize'>View Profile</button>
                </div>)}
            </div>
        </div>
    );
};

export default Doctors;