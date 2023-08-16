import React from 'react';
import image1 from '../../../images/doc3.png'
import { BiLocationPlus} from 'react-icons/bi';
import img33 from '../../../images/sri.jpg'
const Profile = () => {
    return (
        <div className='w-11/12 m-auto py-10'>
            <div className='max-w-5xl m-auto'>
            <div className='bg-[#1e2f5530] gap-3 p-10 rounded-md grid grid-cols-1 md:grid-cols-2'>
               <div className='h-auto'>
               <img className='w-full h-auto' src={image1} alt="" />
               {/* how to use tab device */}
               <div className='my-2 hidden lg:hidden md:grid md:grid-cols-2  flex-wrap gap-2'>
                    <div className='w-full h-20 rounded-md'>
                        <img className='w-full h-full rounded-md' src={img33} alt="" />
                    </div>
                    <div className='w-full h-20 rounded-md'>
                         <img className='w-full h-full rounded-md' src={img33} alt="" />
                    </div>
                </div>
               </div>
                <div className='md:self-center lg:self-start'>
                <div className='space-y-px my-2'>
                <h1 className='text-3xl font-semibold'>Dr. Ruby Perrin</h1>
                <p>MBBS, MD - General Medicine</p>
                <div className="rating">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </div>
                <h1 className='flex gap-1 items-center'><BiLocationPlus/>Dhanmondi, Dhaka, Bangladesh - Get Directions</h1>
                </div>
                <div className='my-2 flex lg:flex  flex-wrap gap-2'>
                    <div className='w-20 h-20 rounded-md md:hidden lg:flex'>
                        <img className='w-full h-full rounded-md' src={img33} alt="" />
                    </div>
                    <div className='w-20 h-20 rounded-md'>
                         <img className='w-full h-full rounded-md' src={img33} alt="" />
                    </div>
                    <div className='w-20 h-20 rounded-md'>
                         <img className='w-full h-full rounded-md' src={img33} alt="" />
                    </div>
                    <div className='w-20 h-20 rounded-md'>
                         <img className='w-full h-full rounded-md' src={img33} alt="" />
                    </div>
                </div>
                <div className='lg:gap-2 lg:flex space-y-3 lg:space-y-0'>
                    <button className='bg-[#2a85b6] w-full lg:w-fit text-white rounded-md py-2 px-3'>Dental Filling</button>
                    <button className='bg-[#2a85b6] w-full lg:w-fit text-white rounded-md py-2 px-3'>Teeth Whitneing</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;