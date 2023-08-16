import React, { useState } from 'react';
import AHome from './AHome/AHome';
import Dayslide from './Dayslide/Dayslide';
import Appoinmentbox from './Appoinmentbox/Appoinmentbox';
import Title from '../Shared/Title/Title';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <Title>Appontment</Title>
            <AHome></AHome>
            <Dayslide selected={selected} setSelected={setSelected}></Dayslide>
            <Appoinmentbox selected={selected}></Appoinmentbox>
        </div>
    );
};

export default Appointment;