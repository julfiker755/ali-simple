import React from 'react';
import img1 from '../../../images/Ellipse 2.png'
import img2 from '../../../images/Ellipse 2 (1).png'
import group from '../../../images/Group 17.png'


const Says = () => {
    const params = {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    return (
        <div className='w-11/12 m-auto my-10'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-semibold'>What Our Patients Says</h1>
                <p className='mt-3 text-sm md:text-base lg:text-xl'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <span className={`hidden lg:flex`}>{'\n'}</span> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-10'>
                <div className='border border-[#2e4271] p-10 rounded-md'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2' >
                        <img src={img1} alt="" />
                        <div>
                            <h1 className='text-2xl font-bold'>Awlad Hossain</h1>
                            <p>Product Designer</p>
                        </div>
                        </div>
                        <img className='w-[40px] h-[40px]' src={group} alt="" />
                    </div>
                    <p className='mt-3 text-justify text-xl'>
                    Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.
                    </p>
                </div>
                <div className='border border-[#2e4271] p-10 rounded-md'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2' >
                        <img src={img2} alt="" />
                        <div>
                            <h1 className='text-2xl font-bold'>Farhana Hossain</h1>
                            <p>Brand Designer</p>
                        </div>
                        </div>
                        <img className='w-[40px] h-[40px]' src={group} alt="" />
                    </div>
                    <p className='mt-3 text-justify text-xl'>
                    Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Says;