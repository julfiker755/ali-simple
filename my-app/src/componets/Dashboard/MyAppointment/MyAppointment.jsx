import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Appcard from './Appcard';
import { axiosinstance } from '../../Shared/Instance/Instance';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Authentication/firebase/firebase';

const MyAppointment = () => {
    const [date, setdate] = useState(null)
    const [appdata,setappdata]=useState([])
    const [user]=useAuthState(auth)
    // how use date
    useEffect(() => {
        const fromdate = new Date()
        setdate(format(fromdate, 'PPP'))
    }, [date])
// Data loaded
   useEffect(()=>{
   const getdata=async()=>{
    const {data}=await axiosinstance.get(`/appointmentget?email=${user?.email}`)
    setappdata(data)
   }
   getdata()
   },[user])
    return (
        <div>
            <div className='flex justify-between my-3 items-center'>
                <h1 className='text-xl lg:text-2xl font-semibold'>My Appointment</h1>
                <h1 className='border border-[#3d86b0] p-1 rounded-md'>{date}</h1>
            </div>
            {/* table start for websites */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-base lg:text-xl'>
                            <th>Scrial</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Gmail</th>
                            <th>Date</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 3 */}
                        {appdata.map((app,index)=> <Appcard index={index} key={app._id} appdata={app}></Appcard>)}
                       

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;