import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../../Home/Home';
import Datails from '../../Doctordetails/Datails';
import Errorpage from '../Errorpage/Errorpage';
import LogIn from '../../Authentication/LogIn/LogIn';
import Register from '../../Authentication/Register/Register';
import Forget from '../../Authentication/Forget/Forget';
import Appointment from '../../Appointment/Appointment';
import Dashboard from '../../Dashboard/Dashboard';
import Private from '../../Private/Private';
import AppointmentHome from '../../Dashboard/AppointmentHome/AppointmentHome';
import MyAppointment from '../../Dashboard/MyAppointment/MyAppointment';
import AllUsers from '../../Dashboard/AllUsers/AllUsers';
import Changepass from '../../Dashboard/AllUsers/Changepass';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            index:true,
            element:<Home></Home>
        },{
          path:'/doctordatils',
          element:<Datails></Datails>
        },{
          path:'/appontment',
          element:<Appointment></Appointment>,
        }
      ]
    },{
      path:'/login',
      element:<LogIn></LogIn>
    },{
      path:'/register',
      element:<Register></Register>
    },{
      path:'/forget',
      element:<Forget></Forget>,
    },{
      path:'/dashboard',
      element:<Private><Dashboard></Dashboard></Private>,
      children:[
        {
          path:'home',
          element:<AppointmentHome></AppointmentHome>
        },{
          path:'myappointment',
          element:<MyAppointment></MyAppointment>
        },{
          path:'alluser',
          element:<AllUsers></AllUsers>
        },{
          path:'change',
          element:<Changepass></Changepass>
        }
      ]
    }
  ]);

export default routes;