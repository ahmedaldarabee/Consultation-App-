"use client"
import Api from "@/app/_utils/Api";
import React, { useEffect, useState } from "react"
import DoctorDetails from "../_components/DoctorDetails";
import DoctorSuggestion from "../_components/DoctorSuggestion";

const Details = ({params}) => {
    const {id} = React.use(params);
    const [doctor,setDoctor] = useState([]);

    useEffect(() => {
        getDoctorDetails();
    },[]);

    const getDoctorDetails = () => {
        Api.getDoctorById(id)
        .then((res) => {
            setDoctor(res.data.data);
        }).catch((error) => {
            console.log('the problem be as: ',error.message);
        })
    }

    return (
        <div className="p-5 md:px-20">
            <div className="grid md:grid-cols-4 grid-cols-1">
                <div className="col-span-3">
                    <DoctorDetails doctor={doctor} />
                </div>                
                <div> <DoctorSuggestion/> </div>
            </div>
        </div>
    )
}

export default Details