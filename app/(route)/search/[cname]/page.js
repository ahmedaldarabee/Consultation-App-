"use client"

import Doctor from '@/app/_components/Doctor';
import Api from '@/app/_utils/Api';
import React, { useEffect, useState } from 'react'

const search = ({params}) => {
    // this way to access needed data from parameters
    const { cname } = React.use(params);

    const [doctorInfo,setDoctorInfo] = useState([]);

    useEffect(() => {
        getDoctorInfo();
    },[]);

    const getDoctorInfo = () => {
        Api.getDoctorByCategory(cname)
        .then((res) => {
            setDoctorInfo(res.data.data)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <div className=''>
            <Doctor doctorList={doctorInfo} heading={cname}/>
        </div>
    )
}

export default search