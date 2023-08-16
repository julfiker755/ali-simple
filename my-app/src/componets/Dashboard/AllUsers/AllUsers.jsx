import React, { useEffect, useState } from 'react';
import { axiosinstance } from '../../Shared/Instance/Instance';
import Usercard from './Usercard';

const AllUsers = () => {
    const [user,setuser]=useState([])
    useEffect(()=>{
        const getuser=async()=>{
            const {data}=await axiosinstance('/user')
            setuser(data)
        }
        getuser()
    },[])
    return (
        <div>
         <h1 className='text-xl lg:text-2xl font-semibold'>All User</h1>
        {/* table start for websites */}
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-base lg:text-xl'>
                        <th>Scrial</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Gmail</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 3 */}
                    {user.map((userdata,index)=><Usercard index={index} key={userdata._id} userdata={userdata}></Usercard>)}
                   
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUsers;