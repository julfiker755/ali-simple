import React from 'react';
import { useNavigate } from 'react-router-dom';

const Usercard = ({userdata,index}) => {
    const {displayName,email,photoURL}=userdata
    const navigate=useNavigate()
    return (
        <tr>
        <th>{index+1}</th>
        <th><img className='w-10 h-10 rounded-md' src={photoURL} alt="" /></th>
        <th>{displayName}</th>
        <th>{email}</th>
        <th><button onClick={()=>navigate('/dashboard/change')} className='bg-[#34c0eb77] rounded-md text-[white] p-2'>Change Password</button></th>

      </tr>
    );
};

export default Usercard;