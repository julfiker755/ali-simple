import React, { useState } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Authentication/firebase/firebase';
import Swal from 'sweetalert2';
import { axiosinstance } from '../../Shared/Instance/Instance';




const Modal = ({ content, selected }) => {
    const [user] = useAuthState(auth)
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [gmail, setgamil] = useState('')
    // Handle form for appiontment data for websites
    const handlefrom = async (e) => {
        e.preventDefault()
        const appointmentinfo = { name, phone, gmail, otheremail: user?.email, time: content?.time, date: format(selected, 'PP') }
        const { data } = await axiosinstance.post('/appointmentsent', appointmentinfo)
        if (data.success) {
            Swal.fire({
                position:'top-end',
                icon: 'success',
                title:data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</label>
                    {/* how to create your content for your website for boss */}
                    {/* User ache */}
                    <form onSubmit={handlefrom}>
                        <div className='my-7 space-y-4'>
                            <input type="text" value={format(selected, 'PP')} className="input text-white w-full input-bordered" readOnly />
                            <input type="text" value={content?.time} className="input  text-white w-full input-bordered" readOnly />
                            <input type="text" value={user ? user?.email : 'Default@gmail.com'} className="input  text-white w-full input-bordered" />
                            <input type="text" onChange={(e) => setname(e.target.value)} placeholder="Full Name" className="input w-full input-bordered" />
                            <input type="text" onChange={(e) => setphone(e.target.value)} placeholder="Phone Number" className="input w-full input-bordered" />
                            <input type="text" onChange={(e) => setgamil(e.target.value)} placeholder="Anathor Email" className="input w-full input-bordered" />
                            <button className='w-full bg-[#3275af] py-3 text-white rounded-md'>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Modal;

