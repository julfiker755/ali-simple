import React from 'react';

const Appcard = ({appdata,index}) => {
    const {name,phone,otheremail,time,date}=appdata
    // console.log(index+1)
    // console.log(appdata)
    return (
        <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{time}</td>
        <td>{otheremail}</td>
        <td>{date}</td>
        <td>{phone}</td>
      </tr>
    );
};

export default Appcard;