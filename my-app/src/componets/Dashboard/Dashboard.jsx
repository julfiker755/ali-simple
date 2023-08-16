import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Title from '../Shared/Title/Title';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            {/* title start */}
            <Title>Dashboard</Title>
            {/* title end */}
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <label htmlFor="my-drawer-2" className="lg:hidden bg-[#236d98] w-fit cursor-pointer py-1 px-4 text-white rounded-md font-semibold">Open</label>
                {/* Page content here  */}
                 <div className='m-5'>
                   <Outlet></Outlet>
                 </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base text-white bg-base-200">
                    {/* Sidebar content here */}
                    <li><Link to="/dashboard/home">Appointment Home</Link></li>
                    <li><Link to="/dashboard/myappointment">My Appointment</Link></li>
                    <li><Link to="/dashboard/alluser">All Users</Link></li>
                    <div className="divider">OR</div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/appontment">Appointment</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;